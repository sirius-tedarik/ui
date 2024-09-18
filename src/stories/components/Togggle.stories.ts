import type { Meta, StoryObj } from '@storybook/vue3'
import { Toggle as ToggleComponent } from '../../ui/components'

const meta: Meta<typeof ToggleComponent> = {
	title: 'Components',
	component: ToggleComponent,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'constract', 'danger', 'warning', 'success'],
			description: 'The variant of the toggle.',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'The size of the toggle.',
		},
		icon: { control: 'text', description: 'Icon to display in the toggle' },
	},
	args: {
		variant: 'primary',
		size: 'md',
		icon: '',
	},
} as Meta<typeof ToggleComponent>

export default meta

export const Toggle: StoryObj<typeof ToggleComponent> = {
	render: args => ({
		components: { Toggle: ToggleComponent },
		setup() {
			return { args }
		},
		template: '<Toggle v-bind="args" />',
	}) as any,
}

