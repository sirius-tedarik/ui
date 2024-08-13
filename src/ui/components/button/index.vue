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
