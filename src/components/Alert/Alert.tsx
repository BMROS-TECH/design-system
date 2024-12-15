import React from 'react'

import {
  alertVariants,
  alertVariantsFormatted
} from 'components/Alert/alert.const'
import { Button } from 'components/Button/Button'
import { cn } from 'lib/utils'
import { Alert as AlertUI, AlertTitle, AlertDescription } from 'ui/alert'

import { AlertProps } from './alert.const'

export const Alert = (props: AlertProps): React.ReactElement => {
  const { title, description, icon, variant = 'default', cta, ...rest } = props

  return (
    <AlertUI className={cn(alertVariantsFormatted({ variant }))} {...rest}>
      <div className="flex flex-col md:!flex-row justify-between items-start gap-x-4">
        <div className="flex items-start gap-x-4">
          <div className="w-6 h-6">
            {icon ? icon : alertVariants[variant].icon}
          </div>
          <div>
            {title && React.isValidElement(title) ? (
              title
            ) : (
              <AlertTitle>{title}</AlertTitle>
            )}
            {description && <AlertDescription>{description}</AlertDescription>}
          </div>
        </div>
        {cta && (
          <Button
            className={cn(
              `hover:bg-transparent w-full md:w-auto mt-4 md:mt-0 ${alertVariants[variant].ctaCn} `
            )}
            variant={cta.variant || 'outline'}
            {...cta}
          >
            {cta.children}
          </Button>
        )}
      </div>
    </AlertUI>
  )
}

Alert.displayName = 'Alert'
