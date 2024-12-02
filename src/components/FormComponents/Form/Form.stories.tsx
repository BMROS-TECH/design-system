// @ts-nocheck

import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'components/Button/Button'
import { InputForm } from 'components/FormComponents/InputForm/InputForm'
import { inputTypes } from 'components/Input/input.types'
import { Path, useForm } from 'react-hook-form'
import { Form } from 'ui/form'
import { string, z } from 'zod'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
})

type FormValues = z.infer<typeof FormSchema>

const meta = {
  title: 'FormComponents/Form',
  component: InputForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({ name, ...args }) => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: ''
      }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log('Funciona!', data)
      // toast({
      //   title: 'You submitted the following values:',
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //     </pre>
      //   ),
      // })
    }

    return (
      <div className="w-80">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <InputForm {...args} form={form} name={name as Path<FormValues>} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    )
  },
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
    disabled: {
      control: 'boolean',
      description: 'variant'
    }
  }
  // args: {
  //   name: 'username' as Path<FormValues>,
  // },
} satisfies Meta<typeof InputForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    // name: 'username' as Path<FormValues>,
    // placeholder: 'Esto es un placeholder',
    // label: 'Este es un label',
  }
}
