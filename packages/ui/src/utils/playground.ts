export default {}
/**
 * this is just a playground to test your ideas
 * with vscode "Code Runner" extension, and go deeper into the idea ⚓
 */

console.log('####### Test 1 #######')
console.log()

type makeSizeProps = {
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
  type: 'rem' | 'px' | 'em'
}

const makeSize = (settings: makeSizeProps) => {
  const { length, inc, initialValue, type } =
    settings
  const resolve: string[] = []
  for (let i = 0; i <= length; i++) {
    if (i === 0) {
      resolve.push(
        `${String(initialValue)}${type}`
      )
    } else {
      resolve.push(
        `${String(
          Number(
            resolve[i - 1].replace(type, '')
          ) + inc
        )}${type}`
      )
    }
  }
  return resolve
}

console.log(
  makeSize({
    inc: 0.5,
    initialValue: 1,
    length: 5,
    type: 'rem',
  })
)
