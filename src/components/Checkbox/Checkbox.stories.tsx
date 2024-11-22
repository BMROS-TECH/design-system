import { useState } from 'react'

import { CheckedState } from '@radix-ui/react-checkbox'
import type { Meta, StoryObj } from '@storybook/react'
import { OutputWrapper } from 'common/components/OutputWrapper'

import { Checkbox } from './Checkbox'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  render: ({ ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [outputText, setOutputText] = useState<CheckedState>(false)

    return (
      <>
        <OutputWrapper>{outputText.toString()}</OutputWrapper>
        <Checkbox
          {...args}
          checked={outputText} // Estado controlado
          onCheckedChange={(state) => {
            console.log({ state })
            setOutputText(state)
          }}
        />
      </>
    )
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID'
    },
    label: {
      control: 'text',
      description: 'Label'
    },
    description: {
      control: 'text',
      description: 'Desciption'
    },
    disabled: {
      control: 'boolean',
      description: 'disabled'
    }
  }
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Acepta terminos y condiciones?',
    id: 'terms',
    description: 'Soy una descripción opcional'
  }
}
