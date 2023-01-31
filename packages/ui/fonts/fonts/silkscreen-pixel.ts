import { getFonts } from '../get-fonts.css'

const types = ['Bold', 'Regular']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const silkscreenPixelFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'SilkscreenPixel' + type
    return acc
  }, {} as fontTypes)

const silkscreenPixelFonts = getFonts({
  name: 'SilkscreenPixel',
  format: 'truetype',
  path: '/fonts/silkscreen-pixel/{{ type }}.ttf',
  types: types,
})

export default silkscreenPixelFonts
