import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'components/Button/Button'
import { Form } from 'components/FormComponents/Form/Form'
import { InputForm } from 'components/FormComponents/InputForm/InputForm'
import { inputTypes } from 'components/Input/input.types'
import { useToast } from 'hooks/use-toast'
import { Path, useForm } from 'react-hook-form'
import { string, z } from 'zod'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
})

type FormValues = z.infer<typeof FormSchema>

const meta = {
  title: 'FormComponents/InputForm',
  component: InputForm,
  // parameters: {
  //   layout: 'centered'
  // },
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
  //         <InputForm form={form} name={name as Path<FormValues>} />
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
    }
  }
  // args: {
  //   name: 'username' as Path<FormValues>,
  // },
} satisfies Meta<typeof InputForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: ({ name, control, ...args }) => {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: ''
      }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'Input value',
        description: JSON.stringify(data)
      })
    }

    return (
      <div className="w-full">
        <Form form={form} onSubmit={onSubmit} className="space-y-6">
          <InputForm
            control={control || form.control}
            name={name as Path<FormValues>}
            {...args}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  },
  args: {
    name: 'username' as Path<FormValues>,
    placeholder: 'Esto es un placeholder',
    label: 'Este es un label',
    description: 'Description'
  }
}
