import React from "react";
import Button from '@material-ui/core/Button';


interface PlayTimeProps {
  setPhase: any
  gnt: number | undefined
  setGnt: any
  lxt: number | undefined
  setLxt: any
}

const PlayTime: React.FC<PlayTimeProps> = ({setPhase, gnt, setGnt, lxt, setLxt}) => {
  const minTimeList = [10, 30, 60, 120]
  const maxTimeList = [30, 60, 120, 180]
  
  const onMinClick = (data: any) => {
    console.log(data.currentTarget.value)
    setGnt(data.currentTarget.value)
  }
  const onMaxClick = (data: any) => {
    console.log(data.currentTarget.value)
    setLxt(data.currentTarget.value)
  }
  
  return (
    <>
    {minTimeList.map((time,index)=>(
      <div key={index}>
        <Button value={time} onClick={onMinClick}>{time}분</Button>
      </div>
    ))}
    ----------------------------
    {maxTimeList.map((time,index)=>(
      <div key={index}>
        <Button value={time} onClick={onMaxClick}>{time}분</Button>
      </div>
    ))}
    <Button onClick={()=>{setPhase('mechanics')}}> 다음 </Button>
    </>
  )
}

export default PlayTime