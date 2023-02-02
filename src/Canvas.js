import { useEffect, useRef } from 'react'
import PIXEL_CORDS from './PIXEL_CORDS'
const Canvas = ({ props }) => {
  const canvasRef = useRef(null)
  const pixelData = props

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    for (let i = 0; i < pixelData.length; i++) {
      context.fillStyle = `rgb(${pixelData[i][0]}, ${pixelData[i][1]}, ${pixelData[i][2]})`
      context.fillRect(PIXEL_CORDS[i][0], PIXEL_CORDS[i][1], 1, 1)
    }
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} width={900} height={1500} />
    </div>
  )
}

export default Canvas
