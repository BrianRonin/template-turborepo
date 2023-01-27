// .storybook/YourTheme.js

import { create } from '@storybook/theming/create'
import { dark_theme } from '../src/styles/theme/dark'

const x: {
  base: 'light' | 'dark'
  colorPrimary?: string
  colorSecondary?: string
  appBg?: string
  appContentBg?: string
  appBorderColor?: string
  appBorderRadius?: number
  fontBase?: string
  fontCode?: string
  textColor?: string
  textInverseColor?: string
  textMutedColor?: string
  barTextColor?: string
  barSelectedColor?: string
  barBg?: string
  buttonBg?: string
  buttonBorder?: string
  booleanBg?: string
  booleanSelectedBg?: string
  inputBg?: string
  inputBorder?: string
  inputTextColor?: string
  inputBorderRadius?: number
  brandTitle?: string
  brandUrl?: string
  brandImage?: string
  brandTarget?: string
  gridCellSize?: number
} = {
  base: 'dark',
  brandTitle: 'logo',
  brandUrl: '/',
  brandImage: '/assets/storybook-logo.svg',
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  //
  colorPrimary: dark_theme.colors._primary[2],
  colorSecondary: dark_theme.colors._secondary[2],

  // UI
  appBg: dark_theme.colors.bg[0],
  appContentBg: dark_theme.colors.bg[0],
  appBorderColor: dark_theme.colors.bg[0],
  appBorderRadius: 4,

  // Text colors
  textColor: dark_theme.colors.text[4],
  textInverseColor: dark_theme.colors.text[2],

  // Toolbar default and active colors
  barTextColor: dark_theme.colors.text[2],
  barSelectedColor:
    dark_theme.colors._secondary[2],
  barBg: dark_theme.colors.bg[0],

  // Form colors
  inputBg: dark_theme.colors.bg[0],
  inputBorder: dark_theme.colors._secondary[2],
  inputTextColor: dark_theme.colors.text[4],
  inputBorderRadius: 2,
}

export const myThema = create(x)
