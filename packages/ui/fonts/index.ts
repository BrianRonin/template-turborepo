import arefruqaaFonts, {
  arefruqaaFontTypes,
} from './fonts/arefruqaa'
import besleyFonts, {
  besleyFontTypes,
} from './fonts/besley'
import bigShouldersFonts, {
  bigShouldersFontTypes,
} from './fonts/big-shoulders'
import cormorantFonts, {
  cormorantFontTypes,
} from './fonts/cormorant'
import flowBlockFonts, {
  flowBlockFontTypes,
} from './fonts/flow-block'
import geoFonts, {
  geoFontTypes,
} from './fonts/geo'
import grupterFonts, {
  grupterFontTypes,
} from './fonts/grupter'
import {
  latoFonts,
  latoFontTypes,
} from './fonts/lato'
import {
  montserratFonts,
  montserratFontTypes,
} from './fonts/montserrat'
import neonMagicFonts from './fonts/neon-magic'

export const fontTypes = {
  lato: latoFontTypes,
  montserrat: montserratFontTypes,
  arefruqaa: arefruqaaFontTypes,
  besley: besleyFontTypes,
  bigShoulders: bigShouldersFontTypes,
  cormorant: cormorantFontTypes,
  flowBlock: flowBlockFontTypes,
  geo: geoFontTypes,
  grupter: grupterFontTypes,
}

export const myFonts = [
  montserratFonts,
  latoFonts,
  neonMagicFonts,
  arefruqaaFonts,
  besleyFonts,
  bigShouldersFonts,
  cormorantFonts,
  flowBlockFonts,
  geoFonts,
  grupterFonts,
].join()

// console.log(myFonts)
