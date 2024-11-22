import { PropsWithChildren } from 'react'

import { UseFormReturn, FieldValues } from 'react-hook-form'
import { Form as FormUI } from 'ui/form'

interface FormProps<T extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: (data: T) => void // Callback con el tipo personalizado
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: PropsWithChildren<FormProps<T>>) => {
  return (
    <FormUI {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} // Tipado correcto de handleSubmit
        {...props}
      >
        {children}
      </form>
    </FormUI>
  )
}

Form.displayName = 'Form'
