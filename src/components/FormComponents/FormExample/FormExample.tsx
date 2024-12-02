// @ts-nocheck

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button/Button'
import { InputForm } from 'components/FormComponents/InputForm/InputForm'
import { Form } from 'components/ui/form'
import { Input } from 'components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
})

export function FormExample() {
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
          <InputForm placeholder="shadcn" form={form} name="username" />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

Input.displayName = 'FormExample'
