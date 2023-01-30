import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S0Text } from 'ui'

export const Main = styled.div`
  ${({ theme }) => css`
    ${S0Text.Main} {
      color: green;
    }
  `}
`
