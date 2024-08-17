import type { DOMWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Toggle } from '../../components'

describe('toggle', () => {
	it('toggle component works when triggered', async () => {
		const wrapper = mount(Toggle)
		const checkbox: DOMWrapper<HTMLInputElement> = wrapper.find('input[type="checkbox"]')

		await checkbox.trigger('click')
		expect(checkbox.element.checked).toBe(true)
		await checkbox.trigger('click')
        expect(checkbox.element.checked).toBe(false)
	})
})
