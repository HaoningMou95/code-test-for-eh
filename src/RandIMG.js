import { useEffect, useRef } from 'react'

const width = 100 // 168
const height = 100 // 194
const RandIMG = ({ props }) => {
  // get the canvas element
  const canvasRef = useRef(null)
  const pixelData = props

  const pixels = []

  const getPixelIndexByCord = (x, y) => {
    let resIndex
    pixels.forEach((element, index) => {
      if (element['position'].x === x && element['position'].y === y) {
        resIndex = index
      }
    })
    return resIndex
  }

  const checkPositionEmpty = (x, y) => {
    const res = getPixelIndexByCord(x, y)
    if (pixels[res].empty) {
      return true
    }
  }

  const getPositionNeighbors = (pixel) => {
    const neighbors = []
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const surroundingX = pixel.position.x + i
        const surroundingY = pixel.position.y + j
        if (surroundingX >= 0 && surroundingX < width && surroundingY >= 0 && surroundingY < height) {
          if (checkPositionEmpty(surroundingX, surroundingY)) {
            const tmpIndex = getPixelIndexByCord(surroundingX, surroundingY)
            neighbors.push(pixels[tmpIndex])
          }
        }
      }
    }
    return neighbors
  }

  const fillPixelsPosition = () => {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const pixel = {
          position: {
            x: i,
            y: j
          },
          color: [],
          empty: true
        }
        pixels.push(pixel)
      }
    }
    console.log(pixels.length)
  }

  const plot = (context) => {
    for (let i = 0; i < pixels.length; i++) {
      context.fillStyle = `rgb(${pixels[i].color[0]}, ${pixels[i].color[1]}, ${pixels[i].color[2]})`
      context.fillRect(pixels[i]['position'].x, pixels[i]['position'].y, 1, 1)
    }
  }

  const pixelTraverse = () => {
    const midx = Math.floor((width - 1) / 2)
    const midy = Math.floor((height - 1) / 2)
    let id = 0
    // get the pixel at the middle point
    const midPixelIndex = getPixelIndexByCord(midx, midy)
    // const midPixelIndex = getPixelIndexByCord(70, 70)
    console.log('midx, midy, midPixelIndex', midx, midy, midPixelIndex)
    pixels[midPixelIndex].empty = false
    pixels[midPixelIndex].id = id
    const currentX = pixels[midPixelIndex].position.x
    const currentY = pixels[midPixelIndex].position.y
    const queue = [[currentX, currentY]]

    while (queue.length > 0) {
      const [x, y] = queue.shift()
      const neighbors = getPositionNeighbors({ position: { x, y } })
      for (const neighbor of neighbors) {
        const neighborIndex = getPixelIndexByCord(neighbor['position'].x, neighbor['position'].y)

        if (pixels[neighborIndex].empty) {
          pixels[neighborIndex].id = ++id
          pixels[neighborIndex].color = pixelData[id]
          pixels[neighborIndex].empty = false
          queue.push([neighbor['position'].x, neighbor['position'].y])
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return
    fillPixelsPosition()
    pixelTraverse()
    console.log(pixels.length)

    plot(context)
    console.log('FINISHED')

    // plot the pixels according to the pixelData coordinates
    // for (let i = 0; i < pixelData.length; i++) {
    //   context.fillStyle = `rgb(${pixelData[i][0]}, ${pixelData[i][1]}, ${pixelData[i][2]})`
    //   context.fillRect(PIXEL_CORDS[i][0], PIXEL_CORDS[i][1], 1, 1)
    // }
  }, [])
  //   fillPixelsPosition()
  //   pixelTraverse()

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  )
}

export default RandIMG
