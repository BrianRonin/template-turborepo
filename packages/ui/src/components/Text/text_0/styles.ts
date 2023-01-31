import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSS_select } from '../../../styles/css/selection.css'

export const Main = styled.div`
  ${({ theme }) => css`
    ${CSS_select(theme)}
    font-size: ${theme.fonts.sizes[2]};
    color: ${theme.colors.text[4]};
  `}
`
