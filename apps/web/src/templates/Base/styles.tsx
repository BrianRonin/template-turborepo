import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Text0 } from 'ui'

export const Main = styled.div`
  ${({ theme }) => css`
    ${Text0.S.Main} {
      color: green;
    }
  `}
`
