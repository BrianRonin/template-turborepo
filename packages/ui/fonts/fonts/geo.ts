import { getFonts } from '../get-fonts.css'

const types = ['Italic ❌', 'Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const geoFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Geo' + type
    return acc
  }, {} as fontTypes)

const geoFonts = getFonts({
  name: 'Geo',
  format: 'truetype',
  path: '/fonts/geo/{{ type }}.ttf',
  types: types,
})

export default geoFonts
