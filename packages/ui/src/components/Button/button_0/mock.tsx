import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { loadingAnimation } from '../../../styles/css/loading/loading-animation.css'
import { Props } from './types'

export const Loading = styled.div`
  ${({ theme }) => css`
      ${loadingAnimation(theme, {
        color: 'white',
        duration: '1s',
        size: '2rem',
      })}
    }
  `}
`

const mock: Props = {
  children: 'children',
  iconDirection: 'left',
  outline: false,
  isLoading: false,
}

export default mock
