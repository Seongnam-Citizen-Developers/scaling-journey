import axios from "axios";
import _ from "lodash";

export const getReview = async (boardgameId) =>{
  const GET_REVIEW_URL = 'https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment'
  const config = {
    params:{
      gameId : boardgameId
    },
  }
  const res = await axios.get(GET_REVIEW_URL,config)
  const parsedData = JSON.parse(res.data.body)
  const items = parsedData.items
  const timesortedReviews = _.sortBy(items,['CreatedTime'])
  return timesortedReviews
}


//서버에 반영하고 페이지에도 반영할 친구 꺼내서 리턴
export const postReview = async(gameId,content)=>{
  const POST_REVIEW_URL = 'https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment'
  const data = {gameId,content}
  await axios.post(POST_REVIEW_URL,data)
  
  return
}
