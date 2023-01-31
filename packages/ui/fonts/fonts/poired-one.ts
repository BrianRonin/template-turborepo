import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const poiredOneFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'PoiredOne' + type
    return acc
  }, {} as fontTypes)

const poiredOneFonts = getFonts({
  name: 'PoiredOne',
  format: 'truetype',
  path: '/fonts/poired-one.ttf',
  types: types,
})

export default poiredOneFonts
