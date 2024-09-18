import type { Meta, StoryObj } from '@storybook/vue3'
import { PadInput as PadInputComponent } from '../../ui/components'

const meta: Meta<typeof PadInputComponent> = {
	title: 'Components',
	component: PadInputComponent,
	argTypes: {
		name: {
			control: 'text',
			description: 'Input name attribute',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		length: {
			control: 'number',
			description: 'Number of digits in the PIN input',
		},
		autoFocus: {
			control: 'boolean',
			description: 'Automatically focus the first input on mount',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder for each digit',
		},
		onSubmit: {
			action: 'submitted',
			description: 'Callback function when the PIN is fully entered',
		},
	},
} as Meta<typeof PadInputComponent>

export default meta

export const PadInput: StoryObj<typeof PadInputComponent> = {
	render: args => ({
		components: { PadInput: PadInputComponent },
		setup() {
			return { args }
		},
		template: `<div style="max-width: 300px">
                        <PadInput v-bind="args" />
                    </div>`,
	}),
	args: {
		name: 'pin',
		length: 4,
		autoFocus: true,
		placeholder: '•',
		error: '',
	},
}
