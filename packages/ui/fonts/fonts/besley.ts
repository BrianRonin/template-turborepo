import { getFonts } from '../get-fonts.css'

const types = [
  'Black',
  'BlackItalic',
  'Bold',
  'BoldItalic',
  'ExtraBold',
  'ExtraBoldItalic',
  'Italic',
  'Medium',
  'MediumItalic',
  'Regular',
  'SemiBold',
  'SemiBoldItalic',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const besleyFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Besley' + type
    return acc
  }, {} as fontTypes)

const besleyFonts = getFonts({
  name: 'Besley',
  format: 'truetype',
  path: '/fonts/besley/static/{{ type }}.ttf',
  types: types,
})

export default besleyFonts
