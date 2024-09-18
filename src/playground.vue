<script setup lang="ts">
import { Toggle } from './ui/components'
</script>

<template>
	<div class="flex items-center h-64 justify-center w-full gap-2 flex-col py-5">
		<h1>test</h1>
		<h2>test</h2>
		<h3>test</h3>
		<h4>test</h4>
		<h5>test</h5>
		<h6>test</h6>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta itaque similique aperiam.</p>

		<Toggle variant="primary" icon="akar-icons:check" />
		<Toggle variant="secondary" icon="akar-icons:check" />
		<Toggle variant="constract" icon="akar-icons:check" />
	</div>
</template>
