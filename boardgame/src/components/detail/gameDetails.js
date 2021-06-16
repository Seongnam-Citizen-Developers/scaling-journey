import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  detailArea:{
    border: "2px solid blue"
  },
  image : {
    width: "100%",
  },
  video:{
    margin : "0 auto",
  },
  videoAlign:{
    textAlign: "center",
  }
})


const GameDetails = (props)=>{
  const classes = useStyles()
  return(
    <div className={classes.detailArea}>
      <img className={classes.image} src={props.image_url} alt="보드게임"></img>
      
      <h3 className={classes.videoAlign}>
        룰 설명
        <iframe className = {classes.video} src="https://www.youtube.com/embed/SvmX053bQZ0" title="gamerule"></iframe>
      </h3>
    </div>
  )
}

export default GameDetails