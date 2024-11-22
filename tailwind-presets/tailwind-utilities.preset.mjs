import { colors } from './tailwind-colors.preset.mjs'
import { typography } from './tailwind-typography.preset.mjs'

export const borderRadius = {
  lg: '0.5rem',
  md: 'calc(0.5rem - 2px)',
  sm: 'calc(0.5rem - 4px)'
}

const commonPropsWrapperWidget = {
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.border}`,
  padding: '24px',
  background: colors.card.DEFAULT
}

export default {
  [Object.keys(typography)]: {
    color: colors.card.foreground
  },
  '.wrapper-widget': commonPropsWrapperWidget,
  '.wrapper-widget-disabled': {
    ...commonPropsWrapperWidget,
    filter: 'grayscale(1)'
  },
  '.wrapper-widget-empty': {
    ...commonPropsWrapperWidget,
    border: `1px dashed ${colors.border}`
  },
  '.wrapper-widget-muted': {
    ...commonPropsWrapperWidget,
    background: colors.muted.DEFAULT
  },
  '.wrapper-widget-small': {
    padding: '16px'
  },
  '.wrapper-widget-none': {
    padding: '0px'
  },
  '.option-link-padding': {
    padding: '16px'
  },
  "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
    { '-webkit-appearance': 'none', margin: 0 }
}
