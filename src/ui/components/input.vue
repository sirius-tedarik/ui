<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

interface Props {
  name: string
  type?: 'text' | 'email' | 'password'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  icon?: string
  disabled?: boolean
  error?: string
}

const { name } = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'sm',
  disabled: false,
})

const idGenerator = computed(() => `${name}${Math.random().toString(36).substring(2, 11)}`)

const password = ref(false)
const value = defineModel()
</script>

<template>
  <div class="sir-input" :class="[size, { 'opacity-50': disabled, error }]">
    <input :id="idGenerator" v-bind="{ name, disabled }" v-model="value"
      :type="type === 'password' ? (password ? 'text' : 'password') : type" :autocomplete="type" class="input"
      :class="[error && 'border-red-500']" placeholder="">
    <label v-if="label" :for="idGenerator" class="label" :class="[error && 'text-red-500']">{{ label }}</label>
    <button v-if="type === 'password'" class="action">
      <Icon :icon="password ? 'akar-icons:eye' : 'akar-icons:eye-closed'" class="icon" @click="password = !password" />
    </button>
    <div v-if="error" class="text-red-500 text-sm absolute -bottom-6">
      {{ error }}
    </div>
  </div>
</template>

<style lang="postcss">
.sir-input {
  @apply flex flex-col-reverse relative w-full mb-1;

  &.sm {
    .input {
      @apply !text-sm;
    }

    .label {
      @apply !text-sm;
    }
  }

  &.md {
    .input {
      @apply !text-base;
    }

    .label {
      @apply !text-sm;
    }
  }

  &.lg {
    .input {
      @apply !text-lg;
    }

    .label {
      @apply !text-xl;
    }
  }
}

.label,
.input {
  transition: all 0.2s;
  touch-action: manipulation;
}

.action {
  @apply absolute right-0 bottom-1 mb-1 text-zinc-400 hover:text-zinc-500 cursor-pointer;

  svg {
    @apply h-5 w-5;
  }
}

.label {
  @apply mb-1
}

.input {
  @apply bg-transparent text-lg pb-2 border-0 border-b border-zinc-400/50 p-0 cursor-text focus:outline-none focus:!border-primary transition-all;

  &:focus {
    outline: 0;
    border-bottom: 2px solid #666;
  }
}


.input:placeholder-shown+label {
  @apply cursor-text max-w-[66.66%] whitespace-nowrap overflow-hidden text-ellipsis transform translate-y-2;
  transform-origin: left bottom;
  transform: translate(0, 2.125rem) scale(1.2);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}


.input:focus::-webkit-input-placeholder {
  opacity: 1;
}


.input:not(:placeholder-shown)+.label,
.input:focus+label {
  @apply !text-primary mb-0;
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>
