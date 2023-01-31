import { getFonts } from '../get-fonts.css'

const types = [
  'Black',
  'BlackItalic',
  'Bold',
  'BoldItalic',
  'ExtraBold',
  'ExtraBoldItalic',
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

export const texturinaFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Texturina' + type
    return acc
  }, {} as fontTypes)

const texturinaFonts = getFonts({
  name: 'Texturina',
  format: 'truetype',
  path: '/fonts/texturina/static/Texturina_28pt/{{ type }}.ttf',
  types: types,
})

export default texturinaFonts
