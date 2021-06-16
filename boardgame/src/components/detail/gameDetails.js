import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  detailArea:{
    border: "2px solid blue",
    // display:'flex',
    // justifyContent:'center',
  },
  image : {
    width: "100%",
  },
  video:{
    margin : "0 auto",
    position: "absolute",
    width : "100%",
    height : "100%",
    // padding : "3% 3% 3% 3%"
  },
  videoAlign:{
    position: "relative",
    width : "100%",
    paddingBottom: "56.25%",
  },
  centerAlign:{
    textAlign: "center",
  }
})


const GameDetails = (props)=>{
  const classes = useStyles()
  return(
    <div className={classes.detailArea}>
      <img className={classes.image} src={props.image_url} alt="보드게임"></img>
      <h3  className={classes.centerAlign}>룰 설명 </h3>
      <div className={classes.videoAlign}>
        <iframe className = {classes.video} src={props.youtubeURL} title="gamerule"></iframe>
      </div>
    </div>
  )
}

export default GameDetails