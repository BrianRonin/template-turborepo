export type hslProps = {
  /**
   * Length must be an odd number to work correctly
   */
  length: number
  /**
   * This is the main color, it must be in HSL
   */
  color: [number, number, number, number] | string
  /**
   * Choose where the main color is in relation to the color palette that will be returned
   */
  position?: 'start' | 'middle' | 'end'
  /**
   * Setting "inverse" to true will invert all orders
   */
  inverse?: boolean
  /**
   * revert order of matrix
   */
  orderMatrix?: boolean
  /**
   * reverse order of saturation
   */
  orderSaturation?: boolean
  /**
   * reverse order of light
   */
  orderLight?: boolean
  /**
   * reverse order of alpha
   */
  orderAlpha?: boolean
  /**
   * reverse order of matrix
   */
  incMatrix?: number
  /**
   * reverse order of saturation
   */
  incSaturation?: number
  /**
   * increment light
   */
  incLight?: number
  /**
   * increment alpha
   */
  incAlpha?: number
}

const withLimit = (
  value: number,
  increment: number,
  limit: number,
  subtraction = false
) => {
  let newLight
  if (increment > 0) {
    newLight = subtraction
      ? value - increment
      : value + increment
  } else {
    newLight = value
  }
  newLight = newLight > limit ? limit : newLight
  newLight = newLight < 0 ? 0 : newLight
  return String(
    Number.isInteger(newLight)
      ? newLight
      : newLight.toFixed(2)
  )
}

const getMatrix = (
  hot: boolean,
  increments: number,
  current: number
) => {
  const after = current >= 250
  let value
  if (hot) {
    value = after
      ? current + increments
      : current - increments
  } else {
    value = after
      ? current - increments
      : current + increments
  }
  return String(withLimit(value, 0, 360))
}

const extractColorValues = (value: string) => {
  const [_matrix, _saturation, _light, _alpha] =
    value.split(',')
  const filter = (value: string | undefined) =>
    Number(
      value ? value.replace(/[^\d.]/g, '') : '1'
    )
  return [
    filter(_matrix),
    filter(_saturation),
    filter(_light),
    filter(_alpha),
  ]
}

export const makeHsl = (
  settings: hslProps
): string[] => {
  const template = 'hsl($m, $s, $l, $a)'
  const makeHsl = (
    matrix: string,
    saturation: string,
    light: string,
    alpha: string
  ) =>
    template
      .replace('$m', matrix)
      .replace('$s', saturation + '%')
      .replace('$l', light + '%')
      .replace('$a', alpha)
  const {
    color,
    length,
    position = 'middle',
    inverse = false,
    incMatrix = 0,
    incSaturation = 0,
    incLight = 0,
    incAlpha = 0,
    orderAlpha = false,
    orderLight = false,
    orderMatrix = false,
    orderSaturation = false,
  } = settings

  const colorValues = Array.isArray(color)
    ? color
    : extractColorValues(color)

  const textColor = Array.isArray(color)
    ? makeHsl(
        String(color[0]),
        String(color[1]),
        String(color[2]),
        String(color[3] ?? '1')
      )
    : color

  const resolve: any[] = []
  let currentMatrix = String(colorValues[0])
  let currentSaturation = String(colorValues[1])
  let currentLight = String(colorValues[2])
  let currentAlpha = String(colorValues[3])

  if (Number.isInteger(length / 2))
    throw new Error(
      'voc?? deve enviar um numero impar em "length"'
    )

  const resolveColor = (
    i: number,
    before: boolean
  ) => {
    const numberValues = () => {
      const matrix = Number(currentMatrix)
      const light = Number(currentLight)
      const saturation = Number(currentSaturation)
      const alpha = Number(currentAlpha)
      return { matrix, light, saturation, alpha }
    }

    const { alpha, matrix, light, saturation } =
      numberValues()

    const context = (e: boolean) => {
      const hanldeBefore = before ? e : !e
      const handleInverse = inverse
        ? !hanldeBefore
        : hanldeBefore
      return handleInverse
    }

    const newMatrix = getMatrix(
      context(orderMatrix),
      incMatrix,
      matrix
    )

    const newSaturation = withLimit(
      saturation,
      incSaturation,
      100,
      context(orderSaturation)
    )

    const newLigth = withLimit(
      light,
      incLight,
      100,
      context(orderLight)
    )

    const newAlpha = withLimit(
      alpha,
      incAlpha,
      1,
      context(orderAlpha)
    )

    currentMatrix = newMatrix
    currentSaturation = newSaturation
    currentLight = newLigth
    currentAlpha = newAlpha
    resolve[i] = makeHsl(
      newMatrix,
      newSaturation,
      newLigth,
      newAlpha
    )
  }
  const halfLength = Math.floor(length / 2)
  switch (position) {
    case 'start':
      resolve[0] = textColor
      for (let i = 1; i < length; i++) {
        resolveColor(i, false)
      }
      break
    case 'middle':
      resolve[halfLength] = textColor // Main Color
      for (let i = halfLength - 1; i >= 0; i--) {
        resolveColor(i, true)
      }
      currentMatrix = String(colorValues[0])
      currentSaturation = String(colorValues[1])
      currentLight = String(colorValues[2])
      currentAlpha = String(colorValues[3])
      for (
        let i = halfLength + 1;
        i <= halfLength * 2;
        i++
      ) {
        resolveColor(i, false)
      }
      break
    case 'end':
      resolve[length] = textColor
      for (let i = length - 1; i >= 0; i--) {
        resolveColor(i, true)
      }
      break
    default:
      console.log(
        'voc?? precisa escolher uma dire????o'
      )
      break
  }
  return resolve
}
