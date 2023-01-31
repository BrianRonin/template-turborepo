import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const almendraFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Almendra' + type
    return acc
  }, {} as fontTypes)

const almendraFonts = getFonts({
  name: 'Almendra',
  format: 'truetype',
  path: '/fonts/almendra.ttf',
  types: types,
})

export default almendraFonts
