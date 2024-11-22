// @ts-nocheck

import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'components/Button/Button'
import { CheckboxForm } from 'components/FormComponents/CheckboxForm/CheckboxForm'
import { Form } from 'components/FormComponents/Form/Form'
import { inputTypes } from 'components/Input/input.types'
import { Path, useForm } from 'react-hook-form'
import { string, z } from 'zod'

const keyItemsName = 'tools'

const items = [
  {
    id: 'react',
    label: 'React',
    description: 'Esta es la lib de React'
  },
  {
    id: 'tailwind',
    label: 'Tailwind'
  },
  {
    id: 'storybook',
    label: 'Storybook'
  },
  {
    id: 'shadcn',
    label: 'Shadcn'
  }
]

const FormSchema = z.object({
  [keyItemsName]: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.'
    })
})

type FormValues = z.infer<typeof FormSchema>

const meta = {
  title: 'FormComponents/CheckboxForm',
  component: CheckboxForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  // render: ({ name, ...args }) => {
  //   const form = useForm<z.infer<typeof FormSchema>>({
  //     resolver: zodResolver(FormSchema),
  //     defaultValues: {
  //       username: '',
  //     },
  //   })

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     console.log('Funciona!', data)
  //   }

  //   return (
  //     <div className="w-80">
  //       <Form form={form} onSubmit={onSubmit} className="w-2/3 space-y-6">
  //         <CheckboxForm form={form} name={name as Path<FormValues>} />
  //         <Button type="submit">Submit</Button>
  //       </Form>
  //     </div>
  //   )
  // },
  argTypes: {
    name: {
      control: string
    },
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
    description: {
      control: 'text',
      description: 'Description'
    },
    disabled: {
      control: 'boolean',
      description: 'variant'
    },
    items: {
      control: 'object',
      description: 'items'
    }
  }
  // args: {
  //   name: 'username' as Path<FormValues>,
  // },
} satisfies Meta<typeof CheckboxForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: ({ name, control, ...args }) => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        [keyItemsName]: []
      }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log('Funciona!', data)
    }

    return (
      <div className="w-full min-w-64">
        <Form form={form} onSubmit={onSubmit} className="space-y-6">
          <CheckboxForm
            control={control}
            name={name as Path<FormValues>}
            {...args}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  },
  args: {
    name: keyItemsName as Path<FormValues>,
    placeholder: 'Esto es un placeholder',
    label: 'Este es un label',
    description: 'Description',
    items
  }
}
