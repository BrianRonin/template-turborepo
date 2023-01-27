const Colors = {
  // 'hsl(73, 35%, 94%, 1)',
  // 'hsl(63, 35%, 72%, 1)',
  // 'hsl(53, 35%, 50%)',
  // 'hsl(43, 35%, 28%, 1)',
  // 'hsl(33, 35%, 6%, 1)',
  primary: {
    color: 'hsl(53, 35%, 50%)',
    length: 5,
    position: 'middle',
    incMatrix: 3,
    incLight: 10,
  },
  // 'hsl(292, 30%, 72%, 1)',
  // 'hsl(294, 30%, 58%, 1)',
  // 'hsl(296, 30%, 44%)',
  // 'hsl(298, 30%, 30%, 1)',
  // 'hsl(300, 30%, 16%, 1)'
  secondary: {
    color: 'hsl(296, 30%, 44%)',
    length: 5,
    position: 'middle',
    incMatrix: 10,
    incLight: 15,
  },
  // 'hsl(52, 20%, 90%)',
  // 'hsl(49, 15%, 69%, 1)',
  // 'hsl(46, 10%, 48%, 1)',
  // 'hsl(43, 5%, 27%, 1)',
  // 'hsl(40, 0%, 6%, 1)'
  text: {
    color: 'hsl(52, 20%, 90%)',
    length: 5,
    position: 'start',
    incMatrix: 3,
    incLight: 20,
    incSaturation: 5,
  },
  //   'hsl(0, 0%, 100%)',
  //   'hsl(0, 0%, 70%, 1)',
  //   'hsl(0, 0%, 40%, 1)',
  //   'hsl(0, 0%, 10%, 1)',
  //   'hsl(0, 0%, 0%, 1)'
  bg: {
    color: 'hsl(0, 0%, 100%)',
    length: 9,
    position: 'start',
    incLight: 11,
  },
  // 'hsl(47, 80%, 73%, 1)',
  // 'hsl(44, 65%, 63%, 1)',
  // 'hsl(41, 50%, 53%)',
  // 'hsl(38, 35%, 43%, 1)',
  // 'hsl(35, 20%, 33%, 1)'
  warning: {
    color: 'hsl(41, 50%, 53%)',
    length: 5,
    position: 'middle',
    incLight: 5,
    incSaturation: 15,
    incMatrix: 3,
  },
  // 'hsl(154, 81%, 80%, 1)',
  // 'hsl(151, 66%, 70%, 1)',
  // 'hsl(148, 51%, 60%)',
  // 'hsl(145, 36%, 50%, 1)',
  // 'hsl(142, 21%, 40%, 1)'
  success: {
    color: 'hsl(148, 51%, 60%)',
    length: 5,
    position: 'middle',
    incLight: 10,
    incSaturation: 15,
    incMatrix: 3,
  },
  // 'hsl(280, 85%, 81%, 1)',
  // 'hsl(283, 70%, 71%, 1)',
  // 'hsl(286, 55%, 61%)',
  // 'hsl(289, 40%, 51%, 1)',
  // 'hsl(292, 25%, 41%, 1)'
  info: {
    color: 'hsl(286, 55%, 61%)',
    length: 5,
    position: 'middle',
    incLight: 15,
    incSaturation: 15,
    incMatrix: 3,
  },
  black: {
    color: 'hsl(0, 0%, 0%)',
    length: 21,
    position: 'start',
    orderLight: true,
    incLight: 5,
  },
  white: {
    color: 'hsl(0, 0%, 100%)',
    length: 21,
    position: 'start',
    incLight: 5,
  },
}

const x = (callback) => {
  return Object.entries(theme.colors).map(
    (key, i) => {
      return []
    }
  )
}

console.log(x())
