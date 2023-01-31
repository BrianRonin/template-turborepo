import { getFonts } from '../get-fonts.css'

const types = [
  'Bold',
  'Medium',
  'Regular',
  'SemiBold',
]

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const messiriFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Messiri' + type
    return acc
  }, {} as fontTypes)

const messiriFonts = getFonts({
  name: 'Messiri',
  format: 'truetype',
  path: '/fonts/messiri/static/{{ type }}.ttf',
  types: types,
})

export default messiriFonts
