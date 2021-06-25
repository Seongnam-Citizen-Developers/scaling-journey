import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

interface PlayTimeProps {
  setPhase: any
  gnt: number | undefined
  setGnt: any
  lxt: number | undefined
  setLxt: any
}

const PlayTime: React.FC<PlayTimeProps> = ({
  setPhase,
  gnt,
  setGnt,
  lxt,
  setLxt,
}) => {
  const [sliderValues, setSliderValues] = useState<number[]>([gnt, lxt])

  const handleChange = (event, value) => {
    setSliderValues(value)
    if (gnt !== value[0]) {
      setGnt(value[0])
    } else if (lxt !== value[1]) {
      setLxt(value[1])
    }
  }

  const valuetext = value => {
    return `${value}°C`
  }
  return (
    <>
      플레이 타임
      <div>
        <Slider
          value={sliderValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          step={10}
          min={10}
          max={180}
        />
      </div>
      모르겠으면 그냥 다음 눌러요
      <Button
        onClick={() => {
          setPhase('mechanics')
        }}
      >
        {' '}
        다음{' '}
      </Button>
    </>
  )
}

export default PlayTime
