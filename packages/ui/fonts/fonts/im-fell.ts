import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const imFellFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'ImFell' + type
    return acc
  }, {} as fontTypes)

const imFellFonts = getFonts({
  name: 'ImFell',
  format: 'truetype',
  path: '/fonts/im-fell.ttf',
  types: types,
})

export default imFellFonts
