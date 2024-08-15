<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
    size?: 'sm' | 'md' | 'lg'
    autoFocus?: boolean
    loading?: boolean
    variant?:
    | 'primary'
    | 'secondary'
    | 'constract'
    | 'danger'
    | 'warning'
    | 'success'
    fullWidth?: boolean
    to?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    autoFocus: false,
    loading: false,
    variant: 'primary',
    fullWidth: false,
    disabled: false,
})

const button = ref<HTMLElement | null>(null)
const loading = computed(() => props.loading)
const disabled = computed(() => props.disabled)

const focus = () => button.value?.focus()

if (props.autoFocus)
    onMounted(() => focus())
</script>

<template>
    <button ref="button" class="sir-button" :class="[size, variant, { 'w-full': fullWidth }]" :disabled="disabled">
        <div v-if="loading" class="slot">
            <Icon icon="svg-spinners:3-dots-bounce" class="flex-shrink-0 h-5 w-5" />
        </div>
        <div v-else class="slot">
            <slot />
        </div>
    </button>
</template>

<style lang="postcss" scoped>
    .sir-button {
        @apply cursor-pointer relative overflow-hidden inline-flex items-center justify-center rounded-xl font-semibold transition-all outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100;

        &.sm {
            @apply px-2.5 py-2 h-8 text-xs;
        }

        &.md {
            @apply px-4 py-2.5 h-10 text-xs;
        }

        &.lg {
            @apply px-5 py-2.5 h-12 text-sm;
        }

        &.primary {
            @apply bg-primary border-none hover:bg-primary/50 text-white shadow-sm focus:ring-[rgba(var(--ion-color-primary-rgb),0.2)];
        }

        &.secondary {
            @apply text-primary dark:text-primary/50 bg-none dark:focus:ring-blue-400/20 outline-none border border-primary;
        }

        &.constract {
            @apply bg-black text-white dark:border-white/10 dark:text-white shadow-sm focus:ring-black/10 !important;
        }

        &.danger {
            @apply border border-solid !border-red-500/10 bg-red-500/10 text-red-500 dark:border-red-400/10 dark:bg-red-400/10 dark:text-red-400 dark:focus:ring-red-400/20 shadow-sm focus:ring-red-500/20;
        }

        &.warning {
            @apply border border-solid !border-yellow-500/10 bg-yellow-500/10 text-yellow-500 dark:border-yellow-400/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:focus:ring-yellow-400/20 shadow-sm focus:ring-yellow-500/20;
        }

        &.success {
            @apply border border-solid !border-emerald-500/10 bg-emerald-500/10 text-emerald-500 dark:border-emerald-400/10 dark:bg-emerald-400/10 dark:text-emerald-400 dark:focus:ring-emerald-400/20 shadow-sm focus:ring-emerald-500/20;
        }

        .slot {
            @apply flex items-center justify-center gap-2 whitespace-nowrap;

            span {
                @apply flex-shrink-0;
            }
        }
    }
</style>