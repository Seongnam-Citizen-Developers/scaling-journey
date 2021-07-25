import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const categoryMappingTable: {
  [key: string]: { name: string; comment: string };
} = {
  hBqZ3Ar4RJ: {
    name: "Abstract",
    comment: "전략으로 승부하고 싶어요",
  },
  MWoxgHrOJD: {
    name: "Animals",
    comment: "귀여운 동물들이 나오면 좋겠어요",
  },
  PinhJrhnxU: {
    name: "Bluffing",
    comment: "서로 속고 속이는 블러핑을 하고 싶어요",
  },
  eX8uuNlQkQ: {
    name: "Card Game",
    comment: "카드로 서로 대결하고 싶어요",
  },
  "329DxyFL9D": {
    name: "Civilization",
    comment: "나만의 문명을 만들어보고 싶어요",
  },
  ZTneo8TaIO: {
    name: "Fantasy",
    comment: "검과 마법의 세계를 모험하고 싶어요",
  },
  Kk70K0524Z: {
    name: "Murder/Mystery",
    comment: "명탐정이 되어 사건을 해결하고 싶어요",
  },
  X8J7RM6dxX: {
    name: "Party Game",
    comment: "그냥 다 같이 웃고 떠들고 싶어요",
  },
  WVMOS3s2pb: {
    name: "Puzzle",
    comment: "복잡한 퍼즐이 있었음 좋겠어요",
  },
  "3B3QpKvXD3": {
    name: "Sci-Fi",
    comment: "공상과학적 요소가 있었음 좋겠어요",
  },
};

interface CategoryProps {
  setPhase: any;
  category: string | undefined;
  setCategory: any;
}

const Category: React.FC<CategoryProps> = ({
  setPhase,
  category,
  setCategory,
}) => {
  const categoryIdList = [
    "hBqZ3Ar4RJ",
    "MWoxgHrOJD",
    "PinhJrhnxU",
    "eX8uuNlQkQ",
    "329DxyFL9D",
    "ZTneo8TaIO",
    "Kk70K0524Z",
    "X8J7RM6dxX",
    "WVMOS3s2pb",
    "3B3QpKvXD3",
  ];
  const style = useStyles();
  const onClick = (data: any) => {
    console.log(data.currentTarget.value);
    setPhase("player");
    setCategory(data.currentTarget.value);
  };

  return (
    <>
      <h2 className={style.title}>Q1.</h2>
      <h4>게임에 무엇을 기대하고 계신가요??</h4>
      {categoryIdList.map((categoryId, index) => (
        <div key={index}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            fullWidth
            value={categoryId}
            className={style.button}
          >
            {categoryMappingTable[categoryId].comment}
          </Button>
        </div>
      ))}
    </>
  );
};

export default Category;

const useStyles = makeStyles({
  title: {
    color: "#E04181",
  },
  button: {
    marginTop: "10px",
    height: "50px",
  },
});
