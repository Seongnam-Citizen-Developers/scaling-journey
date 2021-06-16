// import React from 'react'
import axios from 'axios'


const URL = 'https://api.boardgameatlas.com/api/search?'

export async function getBoardgame(boardgameId){

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const QUERY_URL = URL +'client_id=' +CLIENT_ID +'&ids='+boardgameId
    const response = await axios.get(QUERY_URL)
    const result = response.data
    console.log('helper',result)
    return result
}

export function getgameDetail(game){
  // console.log('dddd',game)
  const image_url = game.image_url
  const pattern = /[^가-힣]/;
  const name = game.tags.filter(tag =>{
    return tag === tag.replace(pattern,"")
  })
  return {image_url:image_url,name:name[0]}
}
