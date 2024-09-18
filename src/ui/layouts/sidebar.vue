<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

interface Props {
	navigation: {
		label: string
		links: {
			title: string
			to: string
			icon: string
		}[]
	}[],
}

const props = defineProps<Props>()

const router = useRouter()

const navigate = (to: string) => router.push(to)
const isActive = (to: string) => router.currentRoute.value.path === to

</script>

<template>
	<aside class="sidebar">
		<a href="#">
            <img class="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="">
        </a>

		<div class="wrap">
			<nav class="links">
				<div v-for="item in props.navigation" :key="item.label" class="link-group">
					<label class="link-label">{{ item.label }}</label>

					<a
						v-for="link in item.links"
						:key="link.title"
						class="link" :class="[{ 'bg-gray-100 text-gray-700': isActive(link.to) }]"
						@click="navigate(link.to)"
					>
						<Icon :icon="link.icon" />

						<span class="title">{{ link.title }}</span>
					</a>
				</div>
			</nav>
		</div>
	</aside>
</template>

<style lang="postcss" scoped>
.sidebar {
    @apply flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-white border rounded-xl;

    .wrap {
        @apply flex flex-col justify-between flex-1 mt-6;

        .links {
            @apply -mx-3 space-y-6;

            .link-group {
                @apply space-y-3;

                .link-label {
                    @apply px-3 text-xs text-gray-500 uppercase dark:text-gray-400;
                }

                .link {
                    @apply flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg;

                    .title {
                        @apply mx-2 text-sm font-medium;
                    }
                }
            }
        }
    }
}
</style>
