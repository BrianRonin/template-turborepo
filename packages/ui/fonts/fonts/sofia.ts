import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const sofiaFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Sofia' + type
    return acc
  }, {} as fontTypes)

const sofiaFonts = getFonts({
  name: 'Sofia',
  format: 'truetype',
  path: '/fonts/sofia.ttf',
  types: types,
})

export default sofiaFonts
