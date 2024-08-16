<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const { name } = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
})

interface Props {
	name: string
	type?: 'text' | 'email' | 'password'
	size?: 'sm' | 'md' | 'lg'
	label?: string
	icon?: string
	disabled?: boolean
}

const idGenerator = computed(() => `${name}${Math.random().toString(36).substring(2, 11)}`)

const password = ref(false)
const value = defineModel()
</script>

<template>
	<div class="sir-input" :class="[{ 'opacity-50': disabled, }, size]">
		<input :id="idGenerator" v-bind="{ name, disabled }" v-model="value"
			class="input peer peer-focus:text-sm peer-placeholder-shown:text-lg peer-placeholder-shown:px-0 peer-focus:bg-white peer-placeholder-shown:bg-transparent peer-placeholder-shown:m-auto peer-placeholder-shown:translate-y-0"
			:type="type === 'password' ? (password ? 'text' : 'password') : type" :autocomplete="type" placeholder=""
		>
		<label v-if="label" :for="idGenerator" class="label peer-focus:text-sm peer-focus:opacity-50 peer-focus:text-primary peer-placeholder-shown:text-lg peer-placeholder-shown:px-0 peer-focus:bg-white peer-placeholder-shown:bg-transparent peer-focus:m-0 peer-placeholder-shown:m-auto peer-placeholder-shown:translate-y-2">{{ label }}</label>
    <button v-if="type === 'password'" class="action">
      <Icon :icon="password ? 'akar-icons:eye' : 'akar-icons:eye-closed'" class="icon" @click="password = !password" />
    </button>
	</div>
</template>

<style lang="postcss">
.sir-input {
  @apply relative w-full max-w-xs h-12;

  .input {
    @apply h-full transition-all px-2 bg-transparent w-full text-gray-600 border-b border-zinc-500 focus:border-primary outline-none select-all;
  }

  .label {
    @apply -z-10 pointer-events-none text-gray-500 absolute left-1 inset-y-0 h-fit flex items-center select-none transition-all text-sm -translate-y-1/2;
  }

  .action {
    @apply absolute right-0 top-1/2 mb-1 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 cursor-pointer;

    svg {
      @apply h-5 w-5;
    }
  }

  &.sm {
    .input {
      @apply text-sm;
    }

    .label {
      @apply text-sm;
    }
  }

  &.md {
    .input {
      @apply text-base;
    }

    .label {
      @apply text-lg;
    }
  }

  &.lg {
    .input {
      @apply text-lg;
    }

    .label {
      @apply text-xl;
    }
  }
}
</style>
