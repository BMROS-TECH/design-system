import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { OutputWrapper } from 'common/components/OutputWrapper'
import { Button } from 'components/Button/Button'
import { variants } from 'ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({ children, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [outputText, setOutputText] = useState<string>('')

    return (
      <>
        <OutputWrapper>{outputText}</OutputWrapper>
        <Button {...args} onClick={() => setOutputText('Click')}>
          {children}
        </Button>
      </>
    )
  },
  argTypes: {
    children: {
      description: 'Texto del botón'
    },
    variant: {
      options: Object.keys(variants.variant),
      control: 'select',
      description: 'variant'
    },
    size: {
      options: Object.keys(variants.size),
      control: 'select',
      description: 'variant'
    },
    disabled: {
      control: 'boolean',
      description: 'variant'
    }
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click!'
  }
}
