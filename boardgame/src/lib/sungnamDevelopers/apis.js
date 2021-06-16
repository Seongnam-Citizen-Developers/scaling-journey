import axios from "axios";

const getReview = async (boardgameId) =>{
  const REVIEW_URL = 'https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment'
  const config = {
    params:{
      gameId : boardgameId
    },
    // headers: { "Access-Control-Allow-Origin": "lor" },
  }
  const res = await axios.get(REVIEW_URL,config)
  const parsedData = JSON.parse(res.data.body)
  const items = parsedData.items

  const reviews = items.map((item)=>{
    // console.log(item)
    return {Content: item.Content, id : item.id.substring(0,5)}
  })
  return reviews
}

export default getReview