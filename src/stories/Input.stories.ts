import type { Meta, StoryFn } from '@storybook/vue3'
import { Input as InputComponent } from '../ui/components'

export default {
	title: 'Components',
	component: InputComponent,
	argTypes: {
		type: { control: 'select', options: ['text', 'email', 'password'] },
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		label: { control: 'text' },
		icon: { control: 'text' },
		disabled: { control: 'boolean' },
	},
} as Meta<typeof InputComponent>

const Template: StoryFn<typeof InputComponent> = args => ({
	components: { InputComponent },
	setup() {
		return { args }
	},
	template: '<InputComponent v-bind="args" />',
})

export const Input = Template.bind({})
Input.args = {
	name: 'example',
	label: 'Your Label',
	size: 'md',
	type: 'text',
	disabled: false,
	icon: '',
	error: '',
}
