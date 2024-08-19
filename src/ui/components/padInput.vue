<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

interface Props {
    name: string
    error?: string
    length?: number
    autoFocus?: boolean
    placeholder?: string
    onSubmit?: (pin: string) => void
}

const props = withDefaults(defineProps<Props>(), {
    autoFocus: true,
    length: 4,
    placeholder: '•',
})

const pinDigits = ref<(number | undefined)[]>(
    Array(props.length).fill(undefined),
)

function handleInput(index: number, target: HTMLInputElement) {
    const value = target.value

    pinDigits.value[index] = Number(value)

    if (index < pinDigits.value.length - 1 && value !== '') {
        const nextInput = target.nextElementSibling as HTMLInputElement
        nextInput.focus()
    }
}

function handlePaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text/plain')

    const digits = pastedData?.split('').map(Number)

    pinDigits.value.splice(0, digits?.length ?? 0, ...(digits ?? []))

    event.preventDefault()
}

function handleDelete(index: number, target: HTMLInputElement) {
    pinDigits.value.splice(index, 1, undefined)
    if (target.value === '' && index > 0) {
        const previousInput = target.previousElementSibling as HTMLInputElement
        previousInput.focus()
        pinDigits.value.splice(index - 1, 1, undefined)
    }
}

const padVal = computed(() => pinDigits.value.join(''))

const handleSubmit = watchEffect(() => {
    if (padVal.value.length === props.length)
        props.onSubmit?.(padVal.value)
})

onMounted(() => {
    const firstInput = document.querySelector('input') as HTMLInputElement
    // eslint-disable-next-line ts/no-unused-expressions
    props.autoFocus && firstInput?.focus()
})

onUnmounted(() => {
    handleSubmit()
})
</script>

<template>
    <form class="siri-padinpt" @submit="handleSubmit()">
        <input v-for="(_, index) in pinDigits" :key="index" v-model="pinDigits[index]" maxlength="1" pattern="[0-9]"
            inputmode="numeric" autocomplete="one-time-code" :placeholder="placeholder"
            @input="handleInput(index, $event.target as HTMLInputElement)" @paste="handlePaste($event)"
            @keydown.delete="handleDelete(index, $event.target as HTMLInputElement)">
    </form>
</template>

<style lang="postcss" scoped>
.siri-padinpt {
    @apply w-full flex gap-4;

    input {
        @apply h-12 transition-all px-2 bg-transparent w-full text-gray-600 border-b border-zinc-500 focus:border-primary outline-none select-all;
    }

    &.error {
        input {
            @apply ring-1 ring-red-500/50 focus:ring-2 focus:ring-red-500 bg-transparent;
        }
    }
}

</style>
