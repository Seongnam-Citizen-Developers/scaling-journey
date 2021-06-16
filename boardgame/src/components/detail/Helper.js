// import React from 'react'
import axios from 'axios'


export function getgameDetail(game){

  const image_url = game.image_url
  const pattern = /[^가-힣]/;
  const name = game.tags.filter(tag =>{
    return tag === tag.replace(pattern,"")
  })
  return {image_url:image_url,name:name[0]}
}
