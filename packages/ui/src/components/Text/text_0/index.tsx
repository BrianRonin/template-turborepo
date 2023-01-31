import * as S from './styles'
import * as T from './types'
export * as T0Text from './types'
export * as S0Text from './styles'
export * as M0Text from './mock'

export const C0Text = ({
  children,
  meta,
}: T.Props) => {
  const text = children?.toString()
  if (text)
    return (
      <S.Main
        {...meta}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    )
  return (
    <S.Main
      {...meta}
      dangerouslySetInnerHTML={{
        __html: 'sem texto',
      }}
    />
  )
}
