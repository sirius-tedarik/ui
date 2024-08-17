<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue'

const idGenerator = computed(() => `toggle-${Math.random().toString(36).substring(2, 11)}`)
const value = defineModel({
    default: false,
})
</script>

<template>
	<label class="sir-toggle" :aria-checked="value">
		<input :id="idGenerator" type="checkbox" class="peer sr-only" v-model="value">
		<label :for="idGenerator" class="hidden" />
		<div class="toggle peer-checked:bg-primary peer-checked:after:left-auto peer-checked:after:right-1 peer-focus:ring-primary">
            <Icon icon="akar-icons:check" class="icon" />
        </div>
	</label>
</template>

<style lang="postcss">
.sir-toggle {
    @apply relative inline-flex cursor-pointer items-center;

    &[aria-checked='true'] .toggle {

        .icon {
            @apply right-1.5 left-auto text-primary;
        }
    }

    .toggle {
        @apply relative h-6 w-10 transition rounded-full bg-zinc-200;

        .icon {
            @apply z-10 text-sm absolute top-1/2 left-1.5 -translate-y-1/2 h-[0.8rem] w-[0.8rem] rounded-full transition-all text-zinc-500;
        }

        &::after {
            @apply absolute top-1/2 left-1 -translate-y-1/2 h-[1.1rem] w-[1.1rem] rounded-full bg-white transition-all content-[''];
        }

        &:active {
            @apply !bg-primary/50;
        }

        &:active::after {
            @apply w-6;
        }

        &:focus-visible {
            @apply ring-2 ring-primary;
        }
    }
}
</style>
