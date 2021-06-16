import React, { MouseEventHandler } from "react";
import Button from '@material-ui/core/Button';



const categoryMappingTable: { [key: string]: {name: string; comment: string} } = {
   "hBqZ3Ar4RJ": {
     name: "Abstract",
     comment: ""
   },
   "MWoxgHrOJD": {
     name: "Animals",
     comment: ""
   },
   "PinhJrhnxU": {
     name: "Bluffing",
     comment: ""
   },
   "eX8uuNlQkQ": {
     name: "Card Game",
     comment: ""
   },
   "329DxyFL9D": {
     name: "Civilization",
     comment: ""
   },
   "ZTneo8TaIO": {
     name: "Fantasy",
     comment: ""
   },
   "Kk70K0524Z": {
     name: "Murder/Mystery",
     comment: ""
   },
   "X8J7RM6dxX": {
     name: "Party Game",
     comment: ""
   },
   "WVMOS3s2pb": {
     name: "Puzzle",
     comment: ""
   },
   "3B3QpKvXD3": {
     name: "Sci-Fi",
     comment: ""
   },
}

interface CategoryProps {
  setPhase: any
  category: string | undefined
  setCategory: any
}

const Category: React.FC<CategoryProps> = ({setPhase, category, setCategory}) => {
  const categoryIdList = ["hBqZ3Ar4RJ",
  "MWoxgHrOJD",
  "PinhJrhnxU",
  "eX8uuNlQkQ",
  "329DxyFL9D",
  "ZTneo8TaIO",
  "Kk70K0524Z",
  "X8J7RM6dxX",
  "WVMOS3s2pb",
  "3B3QpKvXD3"]

  const onClick = (data: any) => {
    console.log(data.currentTarget.value)
    setPhase('player')
    setCategory(data.currentTarget.value)
  }
  
  return (
    <>
    {categoryIdList.map((categoryId, index)=>(
      <div key={index}>{categoryId}: {categoryMappingTable[categoryId].name}
        <Button onClick={onClick} value={categoryId}>눌러봐요</Button>
      </div>
    ))}
    </>
  )
}

export default Category