import { getFonts } from '../get-fonts.css'

const types = ['Regular', 'Medium', 'Bold']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const grupterFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Grupter' + type
    return acc
  }, {} as fontTypes)

const grupterFonts = getFonts({
  name: 'Grupter',
  format: 'truetype',
  path: '/fonts/grupter/{{ type }}.ttf',
  types: types,
})

export default grupterFonts
