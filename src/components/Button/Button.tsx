import { ButtonProps, Button as ButtonUI } from 'ui/button'

export const Button = (props: ButtonProps) => {
  return <ButtonUI {...props}>{props.children}</ButtonUI>
}

Button.displayName = 'Button'
