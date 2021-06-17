import React from "react";
import Button from '@material-ui/core/Button';

const categoryMappingTable: { [key: string]: {name: string; comment: string} } = {
   "hBqZ3Ar4RJ": {
     name: "Abstract",
     comment: "체스같은 전략껨"
   },
   "MWoxgHrOJD": {
     name: "Animals",
     comment: "동물나오는껨"
   },
   "PinhJrhnxU": {
     name: "Bluffing",
     comment: "속임수껨"
   },
   "eX8uuNlQkQ": {
     name: "Card Game",
     comment: "카드껨"
   },
   "329DxyFL9D": {
     name: "Civilization",
     comment: "문명류껨"
   },
   "ZTneo8TaIO": {
     name: "Fantasy",
     comment: "판타지껨"
   },
   "Kk70K0524Z": {
     name: "Murder/Mystery",
     comment: "미스터리/추리"
   },
   "X8J7RM6dxX": {
     name: "Party Game",
     comment: "파티껨"
   },
   "WVMOS3s2pb": {
     name: "Puzzle",
     comment: "퍼즐"
   },
   "3B3QpKvXD3": {
     name: "Sci-Fi",
     comment: "SF"
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
      <div key={index}>
        <Button variant='outlined' onClick={onClick} value={categoryId}>{categoryMappingTable[categoryId].comment}</Button>
      </div>
    ))}
    </>
  )
}

export default Category