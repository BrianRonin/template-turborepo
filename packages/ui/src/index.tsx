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

// * Texts
export * as Text0 from './components/Text/text_0'
export * as Heading0 from './components/Text/heading_0'

// * Switchs
export * as Toggle0 from './components/Switch/toggle_0'
export * as ToggleTheme0 from './components/Switch/toggle_theme'

// * Buttons
export * as Button0 from './components/Button/button_0'
// export * as Button1 from './components/Button/button_1'

// * Containers
export * as Container0 from './components/Container/container_0/styles'
export * as Container1 from './components/Container/container_1'

// *** Utils ***

export * from './utils/make-hsl'
