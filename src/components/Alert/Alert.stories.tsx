import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { alertVariantsArray } from 'components/Alert/alert.const'
import { File } from 'lucide-react'

import { Alert } from './Alert'
import { OutputWrapper } from '../../common/components/OutputWrapper'

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'To set the alert title',
      type: 'string'
    },
    variant: {
      options: alertVariantsArray,
      description: 'To set the alert style',
      defaultValue: { summary: 'default' },
      control: 'radio'
    },
    icon: {
      description: 'To set the custom icon',
      control: 'text'
    }
  }
} as Meta

const Template: StoryFn<typeof Alert> = (args) => {
  const [outputText, setOutputText] = useState<string>('')
  return (
    <div>
      <OutputWrapper>{outputText}</OutputWrapper>
      <Alert
        {...args}
        cta={
          args.cta && {
            children: 'Action text',
            onClick: () => {
              setOutputText('Action callback')
            }
          }
        }
      />
    </div>
  )
}

const TemplateNoCta: StoryFn<typeof Alert> = (args) => <Alert {...args} />

export const Default: StoryFn<typeof Alert> = Template.bind({})
Default.args = {
  title: 'Heads up!',
  description: 'You can add components to your app using the cli.',
  variant: 'default',
  cta: {}
}

export const CustomIcon: StoryFn<typeof Alert> = Template.bind({})
CustomIcon.args = {
  title: 'Heads up!',
  description: 'You can add components to your app using the cli.',
  variant: 'info',
  icon: <File />,
  cta: {}
}

export const NoAction: StoryFn<typeof Alert> = TemplateNoCta.bind({})
NoAction.args = {
  title: 'Heads up!',
  description: 'You can add components to your app using the cli.'
}
