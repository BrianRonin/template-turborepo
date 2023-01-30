export { ThemeProvider } from '@emotion/react'
import { dark_theme } from './styles/theme/dark'
import { DefaultTheme } from './styles/theme/default'
import * as theme from './contexts/theme'
export { useTheme } from '@emotion/react'
export * as GlobalStyles from './styles/globals.css'

// *** Styles *** //
export * from './styles/globals.css'
export const Theme = {
  ...theme,
  themes: {
    default: DefaultTheme,
    dark: dark_theme,
  },
}

// *** Components ***

// * Text
export * from './components/Text/text_0'
export * from './components/Text/heading_0'

// * Switch
export * from './components/Switch/toggle_0'
export * from './components/Switch/toggle_theme'

// * Button
export * from './components/Button/button_0'
// export * as Button1 from './components/Button/button_1'

// * Container
export * from './components/Container/container_0/styles'
export * from './components/Container/container_1'

// *** Utils ***

export * from './utils/make-hsl'
