import { getFonts } from '../get-fonts.css'

const types = [
  'Bold',
  'BoldItalic',
  'ExtraLight',
  'ExtraLightItalic',
  'Italic',
  'Light',
  'LightItalic',
  'Medium',
  'MediumItalic',
  'Regular',
  'SemiBold',
  'SemiBoldItalic',
  'Thin',
  'ThinItalic',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const josefinFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Josefin' + type
    return acc
  }, {} as fontTypes)

const josefinFonts = getFonts({
  name: 'Josefin',
  format: 'truetype',
  path: '/fonts/josefin/static/{{ type }}.ttf',
  types: types,
})

export default josefinFonts
