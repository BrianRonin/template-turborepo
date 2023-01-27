import * as S from './styles'
import * as T from './types'
export * as S0Heading from './styles'
export * as T0Heading from './types'
export * as M0Heading from './mock'

export const C0Heading = ({
  children = 'testando componente',
  as = 'h2',
  size = 'huge',
  uppercase = false,
}: T.Props) => {
  return (
    <S.Main
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </S.Main>
  )
}
