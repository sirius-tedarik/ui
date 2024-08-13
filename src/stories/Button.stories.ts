import type { Meta, StoryObj } from '@storybook/vue3';
import { Button as ButtonComponent } from '../ui/components';

const meta: Meta<typeof Button> = {
  title: 'Components',
  component: ButtonComponent as any,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Auto focus the button on mount',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'constract', 'danger', 'warning', 'success'],
      description: 'Button variant',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Make button disabled',
    },
    to: {
      control: 'text',
      description: 'Router link path',
    },
  },
} as any;

export default meta;

export const Button = {
  render: (args: any) => ({
    components: { Button: ButtonComponent },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Click Me</Button>',
  }),
  args: {
    variant: 'primary',
    size: 'md',
    autoFocus: false,
    loading: false,
    fullWidth: false,
    disabled: false,
  },
} as any;
