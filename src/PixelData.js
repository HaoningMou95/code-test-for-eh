const BREAKPOINT = 8 // 8
const START = 0 // 0
const END = 256 // 256

const PixelData = () => {
  let red,
    green,
    blue = []
  let result = []

  // break down colors
  const breakDownColors = (breakPoint, start, end) => {
    let colors = []
    let steps = (end - start) / breakPoint
    for (let i = 0; i < steps; i++) {
      colors.push(start + i * breakPoint)
    }
    return colors
  }
  red = green = blue = breakDownColors(BREAKPOINT, START, END)

  // generate all possible colors

  // ------solution 1 - for loop - O(n cube)-----
  //   const generateColors = (red, green, blue) => {
  //     let colors = []
  //     for (let i = 0; i < red.length; i++) {
  //       for (let j = 0; j < green.length; j++) {
  //         for (let k = 0; k < blue.length; k++) {
  //           colors.push(`rgb(${red[i]}, ${green[j]}, ${blue[k]})`)
  //         }
  //       }
  //     }
  //     return colors
  //   }
  // result = generateColors(red, green, blue)

  // ------solution 2 - recursive - O(n sqr)-----
  let colors = []
  colors.push(red)
  colors.push(green)
  colors.push(blue)
  // temp array, store the process
  let tmp = []
  // recursive to generate all possible colors
  const generateColors = (colors, N, tmp, result) => {
    for (let i = 0; i < colors[N].length; i++) {
      // N is the index of the array, colors[0] is red array, colors[0][0] is the value of the first element in red array
      tmp.push(colors[N][i])
      if (N < colors.length - 1) {
        generateColors(colors, N + 1, tmp, result)
      } else {
        // the exit of the recursive when reached to the last element of array
        let oneResult = []
        for (let j = 0; j < colors.length; j++) {
          oneResult.push(tmp[j])
          // keep this comment to see how recursive works
          //   console.log(j, ' ', tmp[j])
        }
        result.push(oneResult)
      }
      // pop the last element of the temp array
      tmp.pop()
    }
  }

  generateColors(colors, 0, tmp, result)

  return result
}

export default PixelData
