import axios from "axios"

const YoutubeRequest = async (keyword) =>{
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY
  const searchword = `보드게임 ${keyword} 룰`

  const config = {
    params: {
      part: 'snippet',
      type: 'video',
      q: searchword, 
      key : KEY,
      maxResults: 1, 
    },
  }

  const res = await axios.get(YOUTUBE_API_URL,config)
  const result = res.data.items[0].id.videoId
  const youtubeURL = `https://www.youtube.com/embed/${result}`

  return youtubeURL
}
export default YoutubeRequest