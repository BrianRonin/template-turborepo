import { getFonts } from '../get-fonts.css'

const types = [
  'Black',
  'Bold',
  'ExtraLight',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const serifChineseFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'SerifChinese' + type
    return acc
  }, {} as fontTypes)

const serifChineseFonts = getFonts({
  name: 'SerifChinese',
  format: 'opentype',
  path: '/fonts/serif-chinese/{{ type }}.otf',
  types: types,
})

export default serifChineseFonts
