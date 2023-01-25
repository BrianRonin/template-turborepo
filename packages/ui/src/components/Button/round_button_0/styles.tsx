import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.div`
  ${({ theme }) => css`
    --background: ${theme.colors.primary[3][2]};
    --scale-icon: 1.5;
    --size-container: 5rem;

    display: flex;
    background: var(--background);
    justify-content: center;
    max-width: var(--size-container);
    max-height: var(--size-container);
    border-radius: 50%;
    svg {
      scale: var(--scale-icon);
      height: var(--size-container);
      width: var(--size-container);
    }
  `}
`
