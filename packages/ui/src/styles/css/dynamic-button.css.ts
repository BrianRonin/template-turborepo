import { css, Theme } from '@emotion/react'

type dynamicButtonProps = {
  brightness?: boolean
  disabled?: boolean
  scaleWhenActive?: boolean
}
export const dynamicButton = (
  theme: Theme,
  {
    brightness,
    disabled,
    scaleWhenActive,
  }: dynamicButtonProps = {
    brightness: true,
    disabled: true,
    scaleWhenActive: true,
    },
) => {
  return css`
    &:focus {
      outline: none;
      ${!!brightness &&
      css`
        filter: brightness(110%);
      `}
    }

    &:hover {
      ${!!brightness &&
      css`
        filter: brightness(90%);
      `}
    }

    &:disabled {
      cursor: not-allowed;
      ${!!scaleWhenActive &&
      css`
        /* &:active {
          transform: translate(1px, 0);
        } */
        &:hover {
          filter: none;
        }
      `}
    }

    &:active {
      ${!!scaleWhenActive && theme &&
      css`
        transform: scale(0.95, 0.95);
      `}
    }

    &:not(:hover) {
      filter: none;
    }
  `
}
