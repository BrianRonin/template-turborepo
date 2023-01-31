import { getFonts } from '../get-fonts.css'

export const types = [
  'Black',
  'BlackItalic',
  'Bold',
  'BoldItalic',
  'Italic',
  'Light',
  'LightItalic',
  'Regular',
  'Thin',
  'ThinItalic',
] as const

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const latoFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Lato' + type
    return acc
  }, {} as fontTypes)

export const latoFonts = getFonts({
  name: 'Lato',
  path: '/fonts/lato/Lato-{{ type }}.ttf',
  types: types.slice(),
})
