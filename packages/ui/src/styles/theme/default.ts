import {
  hslProps,
  makeHsl,
} from '../../utils/make-hsl'
import { makeValue } from '../../utils/make-size'

// ? para fazer uma cor boa escolha bastante tons
// ? hsl(matriz, saturação, brilho, alpha)
// ? as cores quentes estão perto de amarelo e frias de azul
// ? Cores quentes 0 <-- 250 --> 360 afastão de 250
// ? Cores frias  0 --> 250 <-- 360 aproximão de 250
// * 1) matriz +6 fria, brilho +20%
// * 2) matriz +3 fria, brilho +10%
// * 3) cor primaria
// * 4) matriz +3 quente, brilho -10%
// * 5) matriz +6 quente, brilho -20%
// ? isso que eu desenvolvi não é uma regra, é uma ideia

// ! orderm brilho --> escuro

interface AllColors {
  primary: hslProps
  secondary: hslProps
  text: hslProps
  bg: hslProps
  warning: hslProps
  success: hslProps
  info: hslProps
  black: hslProps
  white: hslProps
}

export const colors: AllColors = {
  /**
   * Length: 5
   */
  primary: {
    color: 'hsl(53, 35%, 50%)',
    length: 5,
    position: 'middle',
    incMatrix: 3,
    incLight: 10,
  },
  /**
   * Length: 5
   */
  secondary: {
    color: 'hsl(296, 30%, 44%)',
    length: 5,
    position: 'middle',
    incMatrix: 10,
    incLight: 15,
  },
  /**
   * Length: 5
   */
  text: {
    color: 'hsl(52, 20%, 90%)',
    length: 5,
    position: 'start',
    incMatrix: 3,
    incLight: 20,
    incSaturation: 5,
  },
  /**
   * Length: 9
   */
  bg: {
    color: 'hsl(0, 0%, 100%)',
    length: 9,
    position: 'start',
    incLight: 11,
  },
  /**
   * Length: 5
   */
  warning: {
    color: 'hsl(41, 50%, 53%)',
    length: 5,
    position: 'middle',
    incLight: 5,
    incSaturation: 15,
    incMatrix: 3,
  },
  /**
   * Length: 5
   */
  success: {
    color: 'hsl(148, 51%, 60%)',
    length: 5,
    position: 'middle',
    incLight: 10,
    incSaturation: 15,
    incMatrix: 3,
  },
  /**
   * Length: 5
   */
  info: {
    color: 'hsl(286, 55%, 61%)',
    length: 5,
    position: 'middle',
    incLight: 15,
    incSaturation: 15,
    incMatrix: 3,
  },
  /**
   * Length: 21
   */
  black: {
    color: 'hsl(0, 0%, 0%)',
    length: 21,
    position: 'start',
    orderLight: true,
    incLight: 5,
  },
  /**
   * Length: 21
   */
  white: {
    color: 'hsl(0, 0%, 100%)',
    length: 21,
    position: 'start',
    incLight: 5,
  },
}

export const DefaultTheme = {
  name: 'default',
  /**
   * color = related to the theme, _color = fixed color
   */
  colors: {
    primary: makeHsl(colors.primary),
    _primary: makeHsl(colors.primary),
    secondary: makeHsl(colors.secondary),
    _secondary: makeHsl(colors.secondary),
    text: makeHsl(colors.text),
    _text: makeHsl(colors.text),
    bg: makeHsl(colors.bg),
    _bg: makeHsl(colors.bg),
    warning: makeHsl(colors.warning),
    _warning: makeHsl(colors.warning),
    success: makeHsl(colors.success),
    _success: makeHsl(colors.success),
    info: makeHsl(colors.info),
    _info: makeHsl(colors.info),
    black: makeHsl(colors.black),
    _black: makeHsl(colors.black),
    white: makeHsl(colors.white),
    _white: makeHsl(colors.white),
  },
  fonts: {
    family: {
      default:
        'Zen Dots, roboto, Open Sans, sans-serif',
      secondary: "'Montserrat', sans-serif",
    },
    /**
     * Length: 10
     */
    sizes: makeValue({
      type: 'em',
      inc: 0.3,
      initialValue: 1,
      length: 10,
    }),
    lineHeight: {
      tiny: '1',
      small: '1.2',
      medium: '1.5',
      large: '1.8',
    },
    weight: {
      light: '300',
      regular: '400',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
  },
  /**
   * inc: 0.5
   * initialValue: 0.3
   * Length: 50
   */
  sizes: makeValue({
    type: 'rem',
    inc: 0.5,
    initialValue: 0.3,
    length: 50,
  }),
  media: {
    /**
     * screen < 320px
     */
    lMobileS: '(max-width: 320px)',
    /**
     * screen < 375px
     */
    lMobileM: '(max-width: 375px)',
    /**
     * screen < 425px
     */
    lMobileL: '(max-width: 425px)',
    /**
     * screen < 668px
     */
    lTabletS: '(max-width: 668px)',
    /**
     * screen < 768px
     */
    lTabletM: '(max-width: 768px)',
    /**
     * screen < 868px
     */
    lTabletL: '(max-width: 868px)',
    /**
     * screen < 1024px
     */
    lLaptopS: '(max-width: 1024px)',
    /**
     * screen < 1366px
     */
    lLaptopM: '(max-width: 1366px)',
    /**
     * screen < 1440px
     */
    lLaptopL: '(max-width: 1440px)',
    /**
     * screen < 1920px
     */
    lWide: '(max-width: 1920px)',
    /**
     * screen < 2560px
     */
    lUltraWide: '(max-width: 2560px)',
    /**
     * screen < 3840px
     */
    l4k: '(max-width: 3840px)',
    /**
     * screen > 320px
     */
    gMobileS: '(min-width: 320px)',
    /**
     * screen > 375px
     */
    gMobileM: '(min-width: 375px)',
    /**
     * screen > 425px
     */
    gMobileL: '(min-width: 425px)',
    /**
     * screen > 668px
     */
    gTabletS: '(min-width: 668px)',
    /**
     * screen > 768px
     */
    gTabletM: '(min-width: 768px)',
    /**
     * screen > 868px
     */
    gTabletL: '(min-width: 868px)',
    /**
     * screen > 1024px
     */
    gLaptopS: '(min-width: 1024px)',
    /**
     * screen > 1366px
     */
    gLaptopM: '(min-width: 1366px)',
    /**
     * screen > 1440px
     */
    gLaptopL: '(min-width: 1440px)',
    /**
     * screen > 1920px
     */
    gWide: '(min-width: 1920px)',
    /**
     * screen > 2560px
     */
    gUltraWide: '(min-width: 2560px)',
    /**
     * screen > 3840px
     */
    g4k: '(min-width: 3840px)',
  },
  frameSizes: {
    mobileS: '20rem',
    mobileM: '23.438rem',
    mobileL: '26.563rem',
    tabletS: '41.75rem',
    tabletM: '48rem',
    tabletL: '54.25rem',
    laptopS: '64rem',
    laptopM: '85.375rem',
    laptopL: '90rem',
    wide: '120rem',
    ultraWide: '160rem',
    u4k: '240rem',
  },
  /**
   * Length: 30
   */
  transitions: makeValue({
    type: 'ms',
    initialValue: 100,
    inc: 200,
    length: 30,
    decimalPlaces: 0,
  }),
  /**
   * Length: 10
   */
  layers: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ],
}

type Pallete = {
  name: string
  colors: string[]
}

export const palleteColors = (() =>
  Object.keys(DefaultTheme.colors).reduce<
    Pallete[]
  >((prev, key) => {
    return [
      ...prev,
      {
        name: key,
        colors:
          DefaultTheme.colors[
            key as keyof typeof DefaultTheme.colors
          ],
      },
    ]
  }, []))()
