import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.frameSizes.tabletM};
    margin: ${theme.sizes[20]} auto;
    background: ${theme.colors.white[2]};
    padding: ${theme.sizes[3]};
  `}
`
