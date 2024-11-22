import { FC, InputHTMLAttributes } from 'react'

import { Input as InputUI } from 'components/ui/input'
import { Label } from 'ui/label'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactElement
}

export const Input: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputUI id={id} {...props} />
    </div>
  )
}

Input.displayName = 'Input'
