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
const wrapperStyle = { width: 400, margin: 50 }

const PlayTime: React.FC<PlayTimeProps> = ({
  setPhase,
  gnt,
  setGnt,
  lxt,
  setLxt,
}) => {
  const minTimeList = [10, 30, 60, 120]
  const maxTimeList = [30, 60, 120, 180]
  const [sliderValues, setSliderValues] = useState<number[]>([0, 0])
  const [sliderValue, setSliderValue] = useState<number>(10)
  const onMinClick = (data: any) => {
    console.log(data.currentTarget.value)
    if (gnt === Number(data.currentTarget.value)) {
      setGnt()
    } else {
      setGnt(Number(data.currentTarget.value))
    }
  }
  const onMaxClick = (data: any) => {
    console.log(data.currentTarget.value)
    if (lxt === Number(data.currentTarget.value)) {
      setLxt()
    } else {
      setLxt(Number(data.currentTarget.value))
    }
  }
  const handleChange = (event, value) => {
    setSliderValues(value)
  }

  const valuetext = value => {
    return `${value}°C`
  }
  return (
    <>
      최소 플탐
      <div style={wrapperStyle}>
        <Typography id="range-slider" gutterBottom>
          Temperature range
        </Typography>
        <Slider
          value={sliderValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
      {minTimeList.map((time, index) => (
        <div key={index}>
          <Button
            variant="outlined"
            value={time}
            onClick={onMinClick}
            style={time === gnt ? { backgroundColor: '#ececec' } : {}}
          >
            {time}분
          </Button>
        </div>
      ))}
      ---------------------------- 최대 플탐
      {maxTimeList.map((time, index) => (
        <div key={index}>
          <Button
            variant="outlined"
            value={time}
            onClick={onMaxClick}
            style={time === lxt ? { backgroundColor: '#ececec' } : {}}
          >
            {time}분
          </Button>
        </div>
      ))}
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
