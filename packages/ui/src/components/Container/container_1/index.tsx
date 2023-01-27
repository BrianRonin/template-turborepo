import * as S from './styles'
import * as T from './types'
export * as S1Container from './styles'
export * as M1Container from './mock'
export * as T1Container from './types'

export const C1Container = ({
  children,
  custom,
  meta,
}: T.Props) => {
  return (
    <S.Main {...meta}>
      <S.Inside
        boxShadowOnHover={
          custom?.boxShadowOnHover
        }
      >
        {children}
      </S.Inside>
    </S.Main>
  )
}
