export type makeSizeProps = {
  /**
   * The length starts in 0
   */
  length: number
  /**
   * Increments
   */
  inc: number
  /**
   * Initial value
   */
  initialValue: number
  /**
   * type of the length, https://www.w3schools.com/css/css_units.asp
   */
  type: 'rem' | 'px' | 'em' | 'ms'
  /**
   * customize decimal place limit
   */
  decimalPlaces?: number
}

export const makeValue = (
  settings: makeSizeProps
) => {
  const {
    length,
    inc,
    initialValue,
    type,
    decimalPlaces = 2,
  } = settings
  const resolve: string[] = []
  for (let i = 0; i <= length; i++) {
    if (i === 0) {
      resolve.push(
        `${String(initialValue)}${type}`
      )
    } else {
      resolve.push(
        `${String(
          (
            Number(
              resolve[i - 1].replace(type, '')
            ) + inc
          ).toFixed(decimalPlaces)
        )}${type}`
      )
    }
  }
  return resolve
}

const yyy = makeValue({
  type: 'rem',
  inc: 0.1,
  initialValue: 0.07,
  length: 10,
})

console.log(yyy)
