import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const ryeFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Rye' + type
    return acc
  }, {} as fontTypes)

const ryeFonts = getFonts({
  name: 'Rye',
  format: 'truetype',
  path: '/fonts/rye.ttf',
  types: types,
})

export default ryeFonts
