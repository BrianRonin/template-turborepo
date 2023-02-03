import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { T0Heading } from '.'
import { CSS_select } from '../../../styles/css/selection.css'

type props = Omit<T0Heading.Props, 'children'>

const titleSize = {
  small: (theme: Theme) => css`
    font-size: ${theme.fonts.sizes[3]};
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.fonts.sizes[4]};
  `,
  big: (theme: Theme) => css`
    font-size: ${theme.fonts.sizes[5]};
    @media ${theme.media.lTabletM} {
      font-size: ${theme.fonts.sizes[3]};
    }
  `,
  huge: (theme: Theme) => css`
    font-size: ${theme.fonts.sizes[7]};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.lTabletM} {
    font-size: ${theme.fonts.sizes[2]};
  }
`

export const Main = styled.h1<props>`
  ${({ theme, size, uppercase }) => css`
    ${CSS_select(theme)}
    color: ${theme.colors.text[4]};
    text-transform: ${uppercase
      ? 'uppercase'
      : 'none'};
    ${!!size && titleSize[size](theme)};
  `}
`
