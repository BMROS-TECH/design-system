import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { CheckCircle2, Info, XCircle } from 'lucide-react'
import { ButtonProps } from 'ui/button'

export const alertVariants = {
  default: {
    cn: 'bg-background text-foreground',
    icon: <Info />,
    ctaCn: 'text-foreground hover:border-foreground '
  },
  destructive: {
    cn: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    icon: <XCircle />,
    ctaCn: 'hover:border-destructive/50 text-destructive hover:text-destructive'
  },
  info: {
    cn: 'border-info-foreground/50 text-info-foreground dark:border-info-foreground [&>svg]:text-info-foreground',
    icon: <Info />,
    ctaCn:
      'hover:border-info-foreground/50 text-info-foreground hover:text-info-foreground'
  },
  success: {
    cn: 'border-congrats/50  text-congrats dark:border-congrats [&>svg]:text-congrats',
    icon: <CheckCircle2 />,
    ctaCn: 'hover:border-congrats/50 text-congrats hover:text-congrats'
  }
}

export type VariantsTypes = keyof typeof alertVariants

// Tipado para el acumulador del reduce
type VariantCNMap = {
  [key in VariantsTypes]: string
}

export const alertVariantsFormatted = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: Object.entries(alertVariants).reduce((prev, [key, value]) => {
        return {
          ...prev,
          [key]: value.cn
        }
      }, {} as VariantCNMap),
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

export const alertVariantsArray = Object.keys(alertVariants)

export type AlertPropsUI = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariantsFormatted>

export type AlertProps = Omit<AlertPropsUI, 'title'> & {
  title?: string | React.ReactElement
  description?: string | React.ReactElement
  icon?: React.ReactElement
  variant?: VariantsTypes
  cta?: ButtonProps
}
