import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const megrimFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Megrim' + type
    return acc
  }, {} as fontTypes)

const megrimFonts = getFonts({
  name: 'Megrim',
  format: 'truetype',
  path: '/fonts/megrim.ttf',
  types: types,
})

export default megrimFonts
