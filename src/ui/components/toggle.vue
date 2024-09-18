<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

interface Props {
	variant?: 'primary' | 'secondary' | 'constract' | 'danger' | 'warning' | 'success'
	size?: 'sm' | 'md' | 'lg'
	icon?: string
	onChange?: (event: Event) => void
}

withDefaults(defineProps<Props>(), {
	variant: 'primary',
	size: 'md',
})

const idGenerator = computed(() => `toggle-${Math.random().toString(36).substring(2, 11)}`)
const value = defineModel({
	default: false,
})
</script>

<template>
	<label class="sir-toggle" :class="[variant, size]" :aria-checked="value">
		<input :id="idGenerator" v-model="value" type="checkbox" class="peer sr-only" @change="onChange">
		<label :for="idGenerator" class="hidden" />
		<div class="toggle peer-checked:bg-current peer-checked:after:left-auto peer-focus:ring-current"
			:class="[size !== 'sm' ? 'after:left-1 peer-checked:after:right-1' : 'after:left-[0.150rem] left-0.5 peer-checked:after:right-[0.150rem]']"
		>
			<Icon :icon="icon || ''" class="icon" :class="value ? '!left-auto !right-[var(--icon-position)]' : '!left-[var(--icon-position)]'" />
		</div>
	</label>
</template>

<style lang="postcss">
.sir-toggle {
    @apply relative inline-flex cursor-pointer items-center;
    --current-color: theme('colors.primary');
    --current-secondary-color: theme('colors.blue.100');
    --icon-position: 0.5rem;

    &[aria-checked='true'] {
        .toggle {
            @apply !bg-[var(--current-color)];

            .icon {
                @apply text-[var(--current-color)];
            }
        }
    }

    .icon {
        @apply z-10 text-sm absolute top-1/2 -translate-y-1/2 h-[0.8rem] w-[0.8rem] rounded-full transition-all text-zinc-500;
    }

    &.secondary .toggle {
        --current-color: theme('colors.indigo.300');
        --current-secondary-color: theme('colors.indigo.100');
    }

    &.constract .toggle {
        --current-color: theme('colors.black');
        --current-secondary-color: theme('colors.zinc.200');
    }

    &.danger .toggle {
        --current-color: theme('colors.red.500');
        --current-secondary-color: theme('colors.red.100');

    }

    &.warning .toggle {
        --current-color: theme('colors.yellow.500');
        --current-secondary-color: theme('colors.yellow.100');
    }

    &.success .toggle {
        --current-color: theme('colors.green.500');
        --current-secondary-color: theme('colors.green.100');
    }

    &.sm .toggle {
        @apply h-4 w-7;
        --icon-position: 0.25rem;

        .icon {
            @apply h-[0.5rem] w-[0.5rem];
        }

        &::after {
            @apply h-[0.7rem] w-[0.7rem];
        }

        &[aria-checked='true'] .icon {
            @apply right-[0.1rem];
        }

        &[aria-checked='false'] .icon {
            @apply left-[0.1rem];
        }
    }

    &.md .toggle {
        @apply h-6 w-10;
        --icon-position: 0.4rem;

        &::after {
            @apply h-[1.1rem] w-[1.1rem];
        }
    }

    &.lg .toggle {
        @apply h-8 w-14;
        --icon-position: 0.6rem;

        &::after {
            @apply h-[1.5rem] w-[1.5rem];
        }
    }

    .toggle {
        @apply relative transition-all rounded-full bg-zinc-200;

        &::after {
            @apply absolute top-1/2 -translate-y-1/2 rounded-full bg-white transition-all content-[''];
        }

        &:active {
            @apply !bg-[var(--current-secondary-color)];
        }

        &:active::after {
            @apply w-4/6;
        }

        &:focus-visible {
            @apply ring-2 ring-current;
        }
    }
}
</style>
