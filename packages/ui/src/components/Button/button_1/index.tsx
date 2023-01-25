import * as S from './styles'
import { IconType } from 'react-icons'
export * as S from './styles'
export * as mock from './mock'

// export type buttonStyles = {
//   Main?: inject_styles
//   Button?: inject_styles
//   Content?: inject_styles
//   Text?: inject_styles
// }

export type buttonProps = {
  text: string
  Icon: IconType | any
}

const Button = ({ text, Icon }: buttonProps) => {
  return (
    <S.Main>
      <S.Button>
        <S.Content>
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
          <S.TextContainer>
            <span>{text}</span>
          </S.TextContainer>
        </S.Content>
      </S.Button>
    </S.Main>
  )
}

export default Button
