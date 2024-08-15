<script setup lang="ts">
import { Button, Input } from './ui/components'
</script>

<template>
  <div class="flex items-center justify-center w-full h-full gap-2 flex-col py-2">
    <Button>Click me</Button>
    <Button variant="secondary">Click me</Button>
    <Button variant="constract">Click me</Button>
    <Button variant="danger">Click me</Button>
    <Button variant="warning">Click me</Button>
    <Button variant="success">Click me</Button>
  </div>

  <Input label="Name" name="name" placeholder="Enter your name" />
</template>
