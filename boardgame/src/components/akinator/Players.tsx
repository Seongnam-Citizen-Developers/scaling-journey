import React from "react";
import Button from '@material-ui/core/Button';


interface PlayersProps {
  setPhase: any
  numOfPeople: number | undefined
  setNumOfPeople: any
}

const Players: React.FC<PlayersProps> = ({setPhase, setNumOfPeople, numOfPeople}) => {
  const numList = [1,2,3,4,5,6,7,8]
  
  const onClick = (data: any) => {
    console.log(data.currentTarget.value)
    setPhase('playTime')
    setNumOfPeople(Number(data.currentTarget.value))
  }
  
  return (
    <>
    몇명?
    {numList.map((num,index)=>(
      <div key={index}>
        <Button variant='outlined' value={num} onClick={onClick}>{num}명</Button>
      </div>
    ))}
    </>
  )
}

export default Players