import { getFonts } from '../get-fonts.css'

const types = ['circular', 'rounded', 'square']

type fontTypes = {
  [key in (typeof types)[number]]: string
}

export const flowBlockFontTypes =
  types.reduce<fontTypes>((acc, type) => {
    acc[type] = 'FlowBlock' + type
    return acc
  }, {} as fontTypes)

const flowBlockFonts = getFonts({
  name: 'FlowBlock',
  format: 'truetype',
  path: '/fonts/flow-block/{{ type }}.ttf',
  types: types,
})

export default flowBlockFonts
