<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const { name } = defineProps<Props>()

interface Props {
  name: string
  type?: 'text' | 'email' | 'password'
  label?: string
  placeholder?: string
  icon?: string
  color?: string
  size?: string
  hint?: string
  error?: string | false
  disabled?: boolean
}

const idGenerator = computed(
	() => name + Math.random().toString(36).substr(2, 9),
)

const password = ref(false)

const value = defineModel(() => '', (val) => {
  if (val === 'password') {
    password.value = !password.value
  }
})
</script>

<template>
  <div class="sir-input">
    <input :id="idGenerator" v-bind="{ name, disabled }" v-model="value"
      class="peer input peer-focus:text-sm peer-placeholder-shown:text-lg peer-focus:px-1 peer-placeholder-shown:px-0 peer-focus:bg-white peer-placeholder-shown:bg-transparent peer-focus:m-0 peer-placeholder-shown:m-auto peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-0"
      :type="type === 'password' ? (password ? 'text' : 'password') : type" :autocomplete="type" placeholder="">
    <label v-if="label" :for="idGenerator" class="label peer-placeholder-shown:border-primary">{{ label }}</label>
  </div>
</template>

<style lang="postcss">
.sir-input {
  @apply relative w-full max-w-xs;

  .label {
    @apply transition-all px-2 py-3 w-full text-lg text-gray-600 bg-white border-b border-zinc-500 focus:border-primary outline-none select-all;
  }

  .input {
    @apply z-20 text-gray-500 pointer-events-none absolute left-1 inset-y-0 h-fit flex items-center select-none transition-all text-sm -translate-y-1/2 m-0 px-1;
  }

}
</style>
