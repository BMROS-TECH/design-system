import { Checkbox } from 'components/Checkbox/Checkbox'
import { CheckboxFormItemsTypes } from 'components/FormComponents/CheckboxForm/Checkbox.types'
import { InputProps } from 'components/Input/Input'
import { cn } from 'lib/utils'
import { Control, FieldValues, Path } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'ui/form'

// Props genéricas para CheckboxForm
export interface CheckboxFormProps<T extends FieldValues>
  extends Omit<InputProps, 'form' | 'name'> {
  control: Control<T, unknown>
  // Generis para el tipo de FieldValues
  name: Path<T> // El nombre debe ser una clave válida en T
  items: CheckboxFormItemsTypes[]
  description?: string
}

export const CheckboxForm = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  items,
  className,
  ...props
}: CheckboxFormProps<T>) => {
  console.log({ description })
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={() => (
          <FormItem>
            <div className="mb-4">
              {label && <FormLabel className="text-base">{label}</FormLabel>}
              {description && <FormDescription>{description}</FormDescription>}
            </div>
            <div className={cn(`flex gap-2 flex-col`, className)}>
              {items.map((item) => (
                <FormField
                  key={item?.id}
                  control={control}
                  name={name}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item?.id}
                        className="flex flex-row items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field?.value?.includes(item?.id)}
                            onCheckedChange={(checked) => {
                              console.log('FIELD', field)
                              return checked
                                ? // eslint-disable-next-line no-unsafe-optional-chaining
                                  field?.onChange([...field?.value, item?.id])
                                : field?.onChange(
                                    field?.value?.filter(
                                      (value: string) => value !== item?.id
                                    )
                                  )
                            }}
                            label={item?.label}
                            description={item?.description}
                            disabled={props.disabled}
                          />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

CheckboxForm.displayName = 'CheckboxForm'
