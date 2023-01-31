import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const jungeFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Junge' + type
    return acc
  }, {} as fontTypes)

const jungeFonts = getFonts({
  name: 'Junge',
  format: 'truetype',
  path: '/fonts/junge.ttf',
  types: types,
})

export default jungeFonts
