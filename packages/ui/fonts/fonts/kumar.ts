import { getFonts } from '../get-fonts.css'

const types = ['Outline', 'Fill']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const kumarFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Kumar' + type
    return acc
  }, {} as fontTypes)

const kumarFonts = getFonts({
  name: 'Kumar',
  format: 'truetype',
  path: '/fonts/kumar/{{ type }}.ttf',
  types: types,
})

export default kumarFonts
