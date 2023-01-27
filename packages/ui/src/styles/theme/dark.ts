import { makeHsl } from '../../utils/make-hsl'
import { colors, DefaultTheme } from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    ...DefaultTheme.colors,
    black: makeHsl(colors.white),
    white: makeHsl(colors.black),
    bg: makeHsl({
      ...colors.bg,
      color: 'hsl(0, 0%, 100%)',
      position: 'end',
      orderLight: true,
    }),
    primary: makeHsl({
      ...colors.primary,
      inverse: true,
    }),
    secondary: makeHsl({
      ...colors.secondary,
      inverse: true,
    }),
    text: makeHsl({
      ...colors.text,
      inverse: true,
      position: 'end',
    }),
    warning: makeHsl({
      ...colors.warning,
      inverse: true,
    }),
    info: makeHsl({
      ...colors.info,
      inverse: true,
    }),
    success: makeHsl({
      ...colors.success,
      inverse: true,
    }),
  },
} as typeof DefaultTheme
