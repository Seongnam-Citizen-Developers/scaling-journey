import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GameDetails from "../components/detail/gameDetails";
import Reviews from "../components/detail/Reviews";



const useStyles = makeStyles({

  box :{
    margin : "5% 5% 5% 5%",
    border: "2px solid black",
    borderRadius:"10px",
  },

  text : {
    textAlign: "center",
    color : "red",
  },
  images : {
    width: "100%",
  },
})


const Detail = ({match}) => {
  const classes = useStyles()
  const boardgameId = match.params.boardgameId
  console.log(boardgameId)

  return (
    <Container>
      <div className={classes.box}>
        <h1 className={classes.text}>게임 제목</h1>
        <hr></hr>
        {/* 추후에 pc 화면 구현할때 img랑 iframe을 flex 정렬하기 위해 div로 묶음 아니다 그냥 미리 컴포로 빼버릴까??*/}
        <GameDetails></GameDetails>
        <Reviews></Reviews>
      </div>
    </Container>
  )
}

export default Detail