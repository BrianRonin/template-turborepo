import { getFonts } from '../get-fonts.css'

const types = [
  'Black',
  'BlackItalic',
  'Bold',
  'SemiBold',
  'SemiBoldItalic',
  'BoldItalic',
  'ExtraBold',
  'ExtraBoldItalic',
  'Italic',
  'Light',
  'LightItalic',
  'ExtraLight',
  'ExtraLightItalic',
  'Regular',
  'Thin',
  'ThinItalic',
] as const

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const montserratFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'Montserrat' + type
    return acc
  }, {} as fontTypes)

export const montserratFonts = getFonts({
  name: 'Montserrat',
  path: '/fonts/montserrat/Montserrat-{{ type }}.ttf',
  types: types.slice(),
})
