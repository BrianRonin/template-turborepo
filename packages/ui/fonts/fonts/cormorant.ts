import { getFonts } from '../get-fonts.css'

const types = [
  '--',
  'Light',
  'Bold',
  'Medium',
  'Regular',
  'SemiBold',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const cormorantFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Cormorant' + type
    return acc
  }, {} as fontTypes)

const cormorantFonts = getFonts({
  name: 'Cormorant',
  format: 'truetype',
  path: '/fonts/cormorant/{{ type }}.ttf',
  types: types,
})

export default cormorantFonts
