import { getFonts } from '../get-fonts.css'

const types = [
  'Black',
  'BlackItalic',
  'Bold',
  'BoldItalic',
  'ExtraBold',
  'ExtraBoldItalic',
  'ExtraLight',
  'ExtraLightItalic',
  'Italic',
  'Light',
  'LightItalic',
  'Medium',
  'MediumItalic',
  'Regular',
  'SemiBold',
  'SemiBoldItalic',
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
  path: '/fonts/montserrat/{{ type }}.ttf',
  types: types.slice(),
})
