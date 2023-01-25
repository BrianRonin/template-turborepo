import { ReactNode } from 'react'
import { Text0 } from 'ui'
import { ToggleTheme0 } from 'ui'

import * as S from './styles'
export type baseProps = {
  children: ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
    <S.Main>
      <ToggleTheme0.ToggleTheme />
      <Text0.Text>testando</Text0.Text>
      {children}
    </S.Main>
  )
}
