import React from "react"
import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GameDetails from "../components/detail/gameDetails";
import Reviews from "../components/detail/Reviews";
import { getgameDetail } from "../components/detail/Helper";
import YoutubeRequest from "../lib/Youtube/apis";

import {getBoardgames} from "../lib/boardgameAtlas/apis"


const useStyles = makeStyles({

  box :{
    margin : "5% 5% 5% 5%",
    padding: "3% 3% 3% 3%",
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
  const [game, setgameInfo] = useState({image_url:'',name:'',youtubeURL:''})
  const [loading, setloading] = useState(false)


  useEffect(()=>{
    const fetchData = async()=>{ 
      const result = await getBoardgames({ids:boardgameId})
      // console.log('result',result)
      const gamedata = await getgameDetail(result[0])
      console.log('게임디테일',gamedata)
      const youtubeURL = await YoutubeRequest(gamedata.name)
      // setgameInfo({...gamedata,youtubeURL:"https://www.youtube.com/embed/deA9MuH6ijA"})
      setgameInfo({...gamedata,youtubeURL})
      setloading(true)
      console.log(game)
    }
    fetchData()
  },[boardgameId])

  return (
    <Container>
      <div className={classes.box}>
        {!loading ? 
        <>
          <h1 className={classes.text}>로딩중</h1>

        </> :
        <>
          <h1 className={classes.text}>{game.name}</h1>
          <hr></hr>
          <GameDetails
            image_url = {game.image_url}
            youtubeURL = {game.youtubeURL}
          ></GameDetails>
          <Reviews
            boardgameId = {boardgameId}
          ></Reviews>
        </>
      }
        
      </div>
    </Container>
  )
}

export default Detail