import { css } from '@emotion/react'
import { Theme } from './types'

const base = (theme: Theme) => css`
  color: ${theme.colors.text[4]} !important;
  background: ${theme.colors.bg[0]} !important;
  color: white !important;
  background: black !important;
`
const table = (theme: Theme) => css`
  background: ${theme.colors.bg[0]} !important;
  color: ${theme.colors.text[4]} !important;
  border: none !important;
  background: black;
  color: white;
  border: none;
`
const tableType = (theme: Theme) => css`
  background: ${theme.colors.bg[0]} !important;
  color: ${theme.colors.info[2]} !important;
  border: none !important;
  font-size: 1em !important;
`
const tableCode = (theme: Theme) => css`
  background: ${theme.colors.bg[0]} !important;
  color: ${theme.colors.primary[2]} !important;
  border: none !important;
  font-size: 1em !important;
  background: black;
  color: white;
  border: none;
  font-size: 1em;
`

export const myCSS = (theme: Theme) => css`
  .sbdocs-preview,
  .docs-story {
    background: ${theme.colors.bg[0]} !important;
  }
  .sbdocs-wrapper {
    background: ${theme.colors.bg[0]} !important;
  }
  .sbdocs-h3,
  .sbdocs-h2,
  .sbdocs-h1 {
    ${base(theme)}
  }
  .sbdocs-title {
    ${base(theme)}
  }
  .sbdocs-title + div > p {
    ${base(theme)}
  }
  .sbdocs-title + div > ul > li {
    ${base(theme)}
  }

  //   ARG-TABLE    //
  // Title
  .docblock-argstable > thead > tr > th > span {
    ${table(theme)}
  }

  // Body TD
  .docblock-argstable > tbody > tr > td {
    ${table(theme)}
    font-size: 1.3em !important;
  }

  // Code
  .docblock-argstable
    > tbody
    > tr
    > td
    > div
    > span
    > code {
    ${tableCode(theme)}
  }
  .docblock-argstable
    > tbody
    > tr
    > td
    > div
    > p
    > code {
    ${tableCode(theme)}
  }

  // Type
  .docblock-argstable
    > tbody
    > tr
    > td
    > div
    > div
    > span {
    ${tableType(theme)}
  }

  // Description
  .docblock-argstable
    > tbody
    > tr
    > td
    > div
    > span {
    ${table(theme)}
  }
`

export const onlyStory = (theme: Theme) => css`
  .sbdocs-preview,
  .docs-story {
    background: ${theme.colors.bg[0]};
  }
`
