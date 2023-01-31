import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const micheliaFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Michelia' + type
    return acc
  }, {} as fontTypes)

const micheliaFonts = getFonts({
  name: 'Michelia',
  format: 'opentype',
  path: '/fonts/michelia.otf',
  types: types,
})

export default micheliaFonts
