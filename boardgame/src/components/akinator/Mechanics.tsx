import React from "react";
import Button from '@material-ui/core/Button';

const mechanicsMappingTable: { [key: string]: {name: string; comment: string} } = {
  "9mNukNBxfZ": {
    name: "Cooperative Play",
    comment: "협력"
  },
  "BGrhzIN69D": {
    name: "Player Elimination",
    comment: "개인전"
  },
  "9jnCsVuRat": {
    name: "Teams",
    comment: "팀전"
  },
}

interface MechanicsProps {
  setPhase: any
  mechanics: string | undefined
  setMechanics: any
}

const Mechanics: React.FC<MechanicsProps> = ({setPhase, mechanics, setMechanics}) => {
  const mechanicsIdList = [
  "9mNukNBxfZ",
  "BGrhzIN69D",
  "9jnCsVuRat"]

  const onClick = (data: any) => {
    console.log(data.currentTarget.value)
    setMechanics(data.currentTarget.value)
    setPhase('request')
  }
  
  return (
    <>
    {mechanicsIdList.map((mechanicId, index)=>(
      <div key={index}>{mechanicId}: {mechanicsMappingTable[mechanicId].name} {mechanicsMappingTable[mechanicId].comment}
        <Button onClick={onClick} value={mechanicId}>눌러봐요</Button>
      </div>
    ))}
    </>
  )
}

export default Mechanics