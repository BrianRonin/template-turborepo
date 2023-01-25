import {
  MouseEventHandler,
  ReactNode,
} from 'react'
import * as S from './styles'
export * as S from './styles'

export type roundButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

const RoundButton = ({
  children,
  onClick,
}: roundButtonProps) => {
  return (
    <S.Main onClick={onClick}>{children}</S.Main>
  )
}

export default RoundButton
