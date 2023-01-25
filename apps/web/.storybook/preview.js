import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyles, Theme } from 'ui'

// import { Theme } from '../src/contexts/theme/theme'

// import styled from '@emotion/styled'
// const background = styled.div`
//   background-color: red !important;
//   color: red !important;
// `

const ProviderTheme = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

// const getCustomFieldSnippet = (selectedValue) => {
//   const { namespace, name } = selectedValue
//   const path = namespace.join('.')
//   const fullPath = `${path}.${name}`
//   const themeProp = `\${({ theme }) => theme.${fullPath}}`
//   return themeProp
// }

export const onThemeSwitch = (context) => {
  const { theme } = context
  const parameters = {
    backgrounds: {
      default: theme.colors.bg[0],
    },

    // Pass backgrounds: null to disable background switching at all
  }
  return {
    parameters,
  }
}

addDecorator(
  withThemes(
    ProviderTheme,
    [Theme.themes.dark, Theme.themes.default],
    {
      onThemeSwitch,
    },
  ),
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story) => <Story />]
