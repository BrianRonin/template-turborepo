import { getFonts } from '../get-fonts.css'

const types = [
  'Bold',
  'ExtraBold',
  'ExtraLight',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
  'Thin',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const trispaceFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Trispace' + type
    return acc
  }, {} as fontTypes)

const trispaceFonts = getFonts({
  name: 'Trispace',
  format: 'truetype',
  path: '/fonts/trispace/static/Trispace/{{ type }}.ttf',
  types: types,
})

export default trispaceFonts
