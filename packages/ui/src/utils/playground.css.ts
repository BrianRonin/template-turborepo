import { css } from "@emotion/react"
// import {myFonts} from "../fonts"

export default {}
/**
 * this is just a playground to test your ideas
 * with vscode "Code Runner" extension, and go deeper into the idea ⚓
 */

console.log('####### Test 1 #######')
console.log()
type confGetFonts = {
  /**
   * name of font
   */
  name: string
  /**
   * {{ type }} <--
   */
  types: string[]
  path: string
  format?: string
  meta?: Record<string, string>
}

const getFonts = ({
  name,
  path,
  types,
  format = 'truetype',
  meta,
}: confGetFonts) => {
  return types
    .map(
      (type) => css`
        @font-face {
          font-family: ${name};
          src: url(${path.replace('{{ type }}', type)}) format(${format});
          ${meta &&
          Object.keys(meta)
            .map((key) => {
              return css`
                ${key}: ${meta[key]};
              `.styles
            })
            .join('')}
        }
      `.styles
    )
    .join('')
}

console.log(getFonts({
  name: 'lato',
  path: '../../myfonts/lato-{{ type }}',
  types: ['Bold', 'BoldItalic', 'Black', 'BlackItalic'],
  meta: {fontWeigtt: '800', seiLa: 'if'}
}))

