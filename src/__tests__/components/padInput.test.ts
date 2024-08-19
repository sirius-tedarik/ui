import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { PadInput } from '../../ui/components'

describe('padInput.vue', () => {
	it('renders the correct number of input fields', () => {
		const wrapper = mount(PadInput, {
			props: {
				name: 'test-pin',
				length: 4,
				autoFocus: true,
			},
		})

		const inputs = wrapper.findAll('input')
        console.log('inputs', inputs.length)
		expect(inputs.length).toBe(4)
	})

	it('calls onSubmit with the correct pin when all inputs are filled', async () => {
		const onSubmit = vi.fn()
		const wrapper = mount(PadInput, {
			props: {
				name: 'test-pin',
				length: 4,
				autoFocus: true,
				onSubmit,
			},
		})

		const inputs = wrapper.findAll('input')
		for (let i = 0; i < inputs.length; i++) {
			await inputs[i].setValue(String(i + 1))
			await nextTick()
		}

		expect(onSubmit).toHaveBeenCalledWith('1234')
	})

	it('pastes correctly into inputs', async () => {
		const wrapper = mount(PadInput, {
			props: {
				name: 'test-pin',
				length: 4,
				autoFocus: true,
			},
		})

		const input = wrapper.find('input')
		await input.trigger('paste', {
			clipboardData: {
				getData: () => '1234',
			},
		})

		await nextTick()

		const inputs = wrapper.findAll('input')
		expect(inputs[0].element.value).toBe('1')
		expect(inputs[1].element.value).toBe('2')
		expect(inputs[2].element.value).toBe('3')
		expect(inputs[3].element.value).toBe('4')
	})
})
