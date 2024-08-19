import type { Meta, StoryObj } from '@storybook/vue3'
import { Input as InputComponent } from '../ui/components'

const meta: Meta<typeof InputComponent> = {
	title: 'Components',
	component: InputComponent,
	argTypes: {
		name: { control: 'text', description: 'Name attribute of the input' },
		type: {
			control: 'select',
			options: ['text', 'email', 'password'],
			description: 'Type of the input field',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Size of the input field',
		},
		label: { control: 'text', description: 'Label text for the input field' },
		icon: { control: 'text', description: 'Icon to display in the input field' },
		disabled: { control: 'boolean', description: 'Disables the input field' },
		error: { control: 'text', description: 'Error message to display' },
	},
	args: {
		name: 'example',
		type: 'text',
		size: 'sm',
		label: 'Label',
		icon: '',
		disabled: false,
		error: '',
	},
} as Meta<typeof InputComponent>

export default meta

export const Input: StoryObj<typeof InputComponent> = {
	render: args => ({
		components: { Input: InputComponent },
		setup() {
			return { args }
		},
		template: '<Input v-bind="args" />',
	}) as any,
}
