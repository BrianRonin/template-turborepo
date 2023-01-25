import { Theme } from 'ui'

type tTheme = typeof Theme.themes.default

declare module '@emotion/react' {
  export interface Theme extends tTheme {}
}
