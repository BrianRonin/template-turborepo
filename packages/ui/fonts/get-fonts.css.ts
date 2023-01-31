import { css } from "@emotion/react"

type confGetFonts = {
  /**
   * name of font
   */
  name: string
  /**
   * {{ type }} <-- Bold, Italic, ...etc
   */
  types: string[]
  path: string
  /**
   * .ttf = truetype
   * .otf = opentype
   */
  format?: 'opentype' | 'truetype' | 'woff' | 'woff2'
  meta?: Record<string, string>
}

export const getFonts = ({
  name,
  path,
  types,
  format = 'truetype',
  meta,
}: confGetFonts) => {
  return types.map(
    (Type) => css`
      @font-face {
        font-family: ${name}${Type};
        src: url(${path.replace('{{ type }}', Type)}) format(${format});
        ${ meta &&
          Object.keys(meta).map((key) => {
            return css`
              ${key}: ${meta[key]};
            `.styles
          }).join()}
      }
    `.styles
  ).join('\n')
}
