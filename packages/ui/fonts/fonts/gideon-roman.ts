import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const gideonRomanFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'GideonRoman' + type
    return acc
  }, {} as fontTypes)

const gideonRomanFonts = getFonts({
  name: 'GideonRoman',
  format: 'truetype',
  path: '/fonts/gideon-roman.ttf',
  types: types,
})

export default gideonRomanFonts
