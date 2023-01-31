import { getFonts } from '../get-fonts.css'

const types = ['Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const comingSoonFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'ComingSoon' + type
    return acc
  }, {} as fontTypes)

const comingSoonFonts = getFonts({
  name: 'ComingSoon',
  format: 'truetype',
  path: '/fonts/coming-soon.ttf',
  types: types,
})

export default comingSoonFonts
