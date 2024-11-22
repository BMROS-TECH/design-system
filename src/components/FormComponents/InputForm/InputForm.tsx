import { Input, InputProps } from 'components/Input/Input'
import { Control, FieldValues, Path } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'ui/form'

// Props genéricas para InputForm
export interface InputFormProps<T extends FieldValues>
  extends Omit<InputProps, 'form' | 'name'> {
  control: Control<T, unknown>
  // Generis para el tipo de FieldValues
  name: Path<T> // El nombre debe ser una clave válida en T
  description?: string
}

export const InputForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  ...props
}: InputFormProps<T>) => {
  console.log({ description })
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label || name}</FormLabel>
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

InputForm.displayName = 'InputForm'
