import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Input } from '../../components/index'

describe('input', () => {
	it('renders the input element', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'input',
			},
		})

		const input = wrapper.find('input')
		expect(input.exists()).toBe(true)
		expect(input.attributes('name')).toBe('input')
	})

	it('applies the correct size class', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'input',
				size: 'lg',
			},
		})

		expect(wrapper.classes()).toContain('lg')
	})

	it('disables the input when disabled prop is true', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'input',
				disabled: true,
			},
		})

		const input = wrapper.find('input')
		expect(input.attributes('disabled')).toBeDefined()
		expect(wrapper.classes()).toContain('opacity-50')
	})

	it('renders the label when label prop is provided', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'input',
				label: 'Test Label',
			},
		})

		const label = wrapper.find('label')
		expect(label.exists()).toBe(true)
		expect(label.text()).toBe('Test Label')
	})

	it('generates a unique id for the input element', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'input',
			},
		})

		const input = wrapper.find('input')

		expect(input.attributes('id')).toBeDefined()
	})
})
