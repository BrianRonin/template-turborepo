import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { T0Button } from '.'
import { dynamicButton } from '../../../styles/css/dynamic-button.css'

export type mainProps = {
  onlyIcon: boolean
  custom: T0Button.Custom
  outline: boolean
  iconDirection: 'left' | 'right'
}

export const Main = styled.button<mainProps>`
  ${({
    theme,
    onlyIcon,
    custom,
    outline,
    iconDirection,
  }) => css`
    --bg: ${custom.enabled.bg};
    --color: ${custom.enabled.color};
    --ds-color: ${custom.disabled.color};
    --ds-bg: ${custom.disabled.bg};
    font-family: 'LatoRegular';
    background: var(--bg);
    border: none;
    color: var(--color);
    font-size: ${theme.fonts.sizes[4]};
    padding: ${theme.sizes[2]} ${theme.sizes[2]};
    cursor: pointer;
    border-radius: ${theme.sizes[1]};
    transition: padding ${theme.transitions[1]} ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    ${theme.name === 'default' &&
    css`
      box-shadow: 0px 0px 20px ${theme.colors.white[8]};
    `}
    > svg {
      width: 2rem;
      height: 2rem;
      ${iconDirection === 'left' && !onlyIcon
        ? css`
            margin-right: 1rem;
          `
        : css`
            margin-left: 1rem;
          `}
    }

    ${dynamicButton(theme)}

    ${!!onlyIcon &&
    css`
      padding: ${theme.sizes[3]} ${theme.sizes[3]};
      border-radius: 50%;
      > svg {
        margin-left: 0;
      }
    `}
    ${outline &&
    css`
      border: 2px solid var(--bg);
      color: var(--bg);
      background: none;
    `}
  `}
`
