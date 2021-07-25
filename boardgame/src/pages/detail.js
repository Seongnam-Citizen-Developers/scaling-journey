import React from "react"
import { useState, useEffect } from "react";
import { Container,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GameDetails from "../components/detail/gameDetails";
import Reviews from "../components/detail/Reviews";
import { getgameDetail } from "../components/detail/Helper";
import YoutubeRequest from "../lib/Youtube/apis";
import { getReview } from "../lib/sungnamDevelopers/apis";
import {getBoardgames} from "../lib/boardgameAtlas/apis"
import { CircularProgress } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({

  box :{
    margin : "5% 5% 5% 5%",
    padding: "3% 3% 3% 3%",
    // border: "2px solid black",
    borderRadius:"10px",
  },
  main : {
    // border: '2px solid blue',
  },
  loadingArea:{
    textAlign:"center"
  },
  text : {
    textAlign: "center",
  },
  images : {
    width: "100%",
  },
  buttonArea:{
    padding: "10% 0"
  }
})


const Detail = ({match}) => {
  const classes = useStyles()
  const boardgameId = match.params.boardgameId
  const [game, setgameInfo] = useState({image_url:'',name:'',youtubeURL:''})
  const [loading, setloading] = useState(false)
  const [reviews, setReview] = useState([])
  const history = useHistory()

  useEffect(()=>{
    const fetchData = async()=>{ 
      const result = await getBoardgames({ids:boardgameId})
      const gamedata = getgameDetail(result[0])
      const youtubeURL = await YoutubeRequest(gamedata.name)
      const reviews = await getReview(boardgameId)

      setReview(reviews)
      
      
      setgameInfo({...gamedata,youtubeURL})
      setloading(true)
    }
    fetchData()
  },[boardgameId])


  const updateReviews = async () =>{
    const reviews = await getReview(boardgameId)
    setReview(reviews)
  }

  const goHome = ()=>{
    history.push('/')
  }


  return (
    <Container>
      {/* <div className={classes.box}> */}
      <div className={classes.main}>
        {!loading ? 
        <div className={classes.loadingArea}>
          <h2 className={classes.text}>게임을 찾았습니다!</h2>
          <CircularProgress/>
        </div> :
        <>
          <h1 className={classes.text}>{game.name}</h1>
          <hr></hr>
          <GameDetails
            image_url = {game.image_url}
            youtubeURL = {game.youtubeURL}
          ></GameDetails>
          <Reviews
            reviews= {reviews}
            updateReviews = {updateReviews}
            boardgameId = {boardgameId}
          ></Reviews>
        </>
      }
      <div className={classes.buttonArea}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={goHome}
            >다른 게임 추천 받기</Button>
        </div>
      </div>
    </Container>
  )
}

export default Detail