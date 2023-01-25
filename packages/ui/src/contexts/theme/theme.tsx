import { ThemeProvider } from '@emotion/react'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { dark_theme } from '../../styles/theme/dark'
import { DefaultTheme } from '../../styles/theme/default'
import { if_window } from '../../utils/is-window'

export type Props = {
  children: ReactNode
  _theme?: typeof DefaultTheme
}

export type ContextValues = {
  theme: typeof DefaultTheme
  setTheme: (mode: 'light' | 'dark') => void
}

export const Context =
  createContext<ContextValues>({
    theme: DefaultTheme,
    setTheme: (x) => x,
  })

export const Provider = ({
  children,
  _theme,
}: Props) => {
  const [theme, setTheme] = useState(
    _theme ? _theme : DefaultTheme
  )

  useEffect(() => {
    const localTheme =
      localStorage.getItem('theme')
    if (!localTheme) return
    const newTheme = JSON.parse(localTheme)
    setTheme(newTheme)
  }, [])

  const handle_set_theme: ContextValues['setTheme'] =
    useCallback((mode) => {
      switch (mode) {
        case 'dark':
          setTheme(dark_theme)
          localStorage.setItem(
            'theme',
            JSON.stringify(dark_theme)
          )
          break
        default:
          setTheme(DefaultTheme)
          localStorage.setItem(
            'theme',
            JSON.stringify(DefaultTheme)
          )
          break
      }
    }, [])

  return (
    <Context.Provider
      value={{
        theme,
        setTheme: handle_set_theme,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}
