import {
  GlobalStyles,
  Theme,
  ThemeProvider,
  useTheme,
} from 'ui'
import { PrismjsTheme } from './prismjs-theme'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        {
          value: 'light',
          title: 'Light',
          left: '🔆',
        },
        {
          value: 'dark',
          title: 'Dark',
          left: '⚜',
        },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}

const themes = {
  light: Theme.themes.default,
  dark: Theme.themes.dark,
}

const withGlobalStyle = (Story) => {
  const theme = useTheme()
  const css = `
  .sbdocs {
    background: black !important;
    background-color: black !important;
    color: hsl(49, 15%, 70%, 1) !important;
  }
  .css-bdtlhc {
    background: inherit;
    color: inherit;
    padding: 0;
    border: 0;
  }
  li {
    font-size: 1em !important;
  } 
  pre {
    margin: 0;
    font-size: 20px !important;
    line-height: 27px !important;
    span {
      margin: 20px !important;
      display: flex !block;
      content: 5rem;
    }
  }
  ${PrismjsTheme}
  .docs-story {
    background: ${theme.colors.bg[0]} !important;
    background-color: ${theme.colors.bg[0]} !important;        
  }
  `
  return (
    <>
      <GlobalStyles.default />
      <style>{css}</style>
      <Story />
    </>
  )
}

export const withTheme = (Story, context) => {
  const { theme } = context.globals
  return (
    <ThemeProvider
      theme={themes[theme] || themes['light']}
    >
      <Story />
    </ThemeProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgorunds: {
    defualt: 'transparent',
  },
  layout: 'fullscreen',
}

export const decorators = [
  withGlobalStyle,
  withTheme,
]
