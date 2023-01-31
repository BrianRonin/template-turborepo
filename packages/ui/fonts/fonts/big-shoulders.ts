import { getFonts } from '../get-fonts.css'

const types = [
  'Black ❌',
  'BlackItalic ❌',
  'Bold',
  'BoldItalic ❌',
  'ExtraBold',
  'ExtraBoldItalic ❌',
  'Italic ❌',
  'Medium',
  'MediumItalic ❌',
  'Regular',
  'SemiBold',
  'SemiBoldItalic ❌',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const bigShouldersFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'BigShoulders' + type
    return acc
  }, {} as fontTypes)

const bigShouldersFonts = getFonts({
  name: 'BigShoulders',
  format: 'truetype',
  path: '/fonts/big-shoulders/static/{{ type }}.ttf',
  types: types,
})

export default bigShouldersFonts
