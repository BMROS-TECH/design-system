import type { Meta, StoryObj } from '@storybook/react'
import { inputTypes } from 'components/Input/input.types'

import { Input } from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      options: inputTypes,
      control: 'select',
      description: 'placeholder'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    },
    label: {
      control: 'text',
      description: 'label'
    },
    disabled: {
      control: 'boolean',
      description: 'disabled'
    }
  }
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {}
}