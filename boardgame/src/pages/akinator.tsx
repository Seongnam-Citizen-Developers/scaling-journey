import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { getBoardgames } from "../lib/boardgameAtlas/apis";
import Button from '@material-ui/core/Button';

const Akinator: React.FC = () => {

  const styles = useStyles()
  const [url, setUrl] = useState<string>('')
  async function done() {
    const games = await getBoardgames({
      name: "katan"
    })
    console.log(games)
    setUrl(games?.[0] ? games?.[0].image_url : '')
  }
  
  // getBoardgames
  return (
    <>
    <Button onClick={done}>버튼</Button>
    <img src={url} alt="" width="100%" />
    </>
  )
}

export default Akinator

export const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});