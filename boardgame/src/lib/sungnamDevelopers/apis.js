import axios from "axios";

export const getReview = async (boardgameId) =>{
  const GET_REVIEW_URL = 'https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment'
  const config = {
    params:{
      gameId : boardgameId
    },
    // headers: { "Access-Control-Allow-Origin": "lor" },
  }
  const res = await axios.get(GET_REVIEW_URL,config)
  const parsedData = JSON.parse(res.data.body)
  const items = parsedData.items

  const reviews = items.map((item)=>{
    // console.log(item)
    return {Content: item.Content, id : item.id.substring(0,5),GameId:item.GameId}
  })
  return reviews
}


//서버에 반영하고 페이지에도 반영할 친구 꺼내서 리턴
export const postReview = async(gameId,content)=>{
  const POST_REVIEW_URL = 'https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment'
  const data = {gameId,content}
  const res = await axios.post(POST_REVIEW_URL,data)
  const resdata = res.data
  const newPost = {Content: resdata.Content, id: resdata.id.substring(0,5),GameId:resdata.GameId}
  console.log('newPost',newPost)
  return newPost
  
}
