import { FC } from 'react'

import { Checkbox as CheckboxUI } from 'components/ui/checkbox'
import { cn } from 'lib/utils'

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxUI> {
  label?: string | React.ReactElement
  description?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  description,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-row items-start gap-2 hover:cursor-pointer">
      <CheckboxUI id={id} className={cn('mt-[-1px]', className)} {...props} />
      <label
        htmlFor={id}
        className="flex flex-col text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
      >
        {label}
        {description && (
          <span className="text-detail !text-muted-foreground">
            {descriptionasdasd}
          </span>
        )}
      </label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'
