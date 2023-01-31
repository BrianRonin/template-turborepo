import {
  css,
  Global,
  useTheme,
} from '@emotion/react'
import { CSS_ScrollBar } from './css/scrollbar/scrollbar_1.css'
import { CSS_notSelect } from './css/selection.css'
import { myFonts } from '../../fonts'

const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        ${myFonts}
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: ${theme.fonts.family.default}, sans-serif;
          ${CSS_notSelect(theme)}
        }
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
          ${CSS_ScrollBar(theme)}
        }
        --body-bg: ${theme.colors.bg[0]};
        body {
          background: ${theme.colors.bg[0]};
          font-size: ${theme.fonts.sizes[2]};
          color: ${theme.colors.text[4]};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: ${theme.fonts.weight.bold};
          margin: ${theme.sizes[8]} 0;
        }

        @media ${theme.media.lLaptopM} {
          button {
            font-size: ${theme.fonts.sizes[1]} !important;
          }
          input {
            font-size: ${theme.fonts.sizes[1]} !important;
          }
        }
      `}
    />
  )
}

export default GlobalStyles
