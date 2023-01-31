import { getFonts } from '../get-fonts.css'

const types = ['Bold ❌', 'Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const arefruqaaFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Arefruqaa' + type
    return acc
  }, {} as fontTypes)

const arefruqaaFonts = getFonts({
  name: 'Arefruqaa',
  format: 'opentype',
  path: '/fonts/arefruqaa/{{ type }}.ttf',
  types: types,
})

export default arefruqaaFonts
