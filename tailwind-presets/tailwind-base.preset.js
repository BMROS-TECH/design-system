import plugin from 'tailwindcss/plugin'

import { colors } from './tailwind-colors.preset.mjs'
import { typography } from './tailwind-typography.preset.mjs'
import utilities, { borderRadius } from './tailwind-utilities.preset.mjs'

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors,
      borderRadius,
      minWidth: {
        lg: '32rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ...typography
      })
      addUtilities({ ...utilities })
    })
  ]
}
