import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const luxuriousRomanFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'LuxuriousRoman' + type
    return acc
  }, {} as fontTypes)

const luxuriousRomanFonts = getFonts({
  name: 'LuxuriousRoman',
  format: 'truetype',
  path: '/fonts/luxurious-roman.ttf',
  types: types,
})

export default luxuriousRomanFonts
