import * as S from './styles'
import { ReactNode } from 'react'
import { ToggleTheme } from 'ui'

export type baseProps = {
  children: ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
    <S.Main>
      <ToggleTheme />
      {children}
    </S.Main>
  )
}
