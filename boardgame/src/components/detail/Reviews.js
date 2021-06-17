import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Input,Button } from '@material-ui/core'
import {postReview} from '../../lib/sungnamDevelopers/apis'

const useStyles = makeStyles({
  reviewArea :{
    padding : "3% 3% 3% 3%",
    border : "2px solid red"
  },
  formArea :{
    width: "100%"
  }
})



const Reviews = (props) =>{
  const classes = useStyles()
  // const [reviews, setview] = useState([])
  const reviews = props.reviews
  const [userInput, setInput] = useState('')

  // useEffect(() =>{
  //   const fetchData = async()=>{
  //     const fetchedReviews = await getReview(props.boardgameId)
  //     // setview(adjustedReviews.pageReviews[maxPage])
  //     console.log('reviews',reviews)
      
  //   }
  //   fetchData()
  // },[]) 
  


  const onChange = (e) =>{
    setInput(e.target.value)
  }

  const onSubmit = async (e) =>{
    e.preventDefault()
    if(userInput.length<=0){
      alert('댓글을 입력해주세요')
      return
    }else{
      // const res = await postReview(props.boardgameId,userInput)
      console.log('gameId',props.boardgameId)
      await postReview(props.boardgameId,userInput)
      await props.updateReviews()

      clearInput()
    }
  
  }
  const clearInput = () =>{
    setInput('')
    const Input = document.querySelector('Input')
    Input.value = ''
  }



  const reviewItems = reviews.length > 0 ?
    reviews.map(review =>
      <li
        key={review.id}
      >
        {review.id} : {review.Content}
      </li>
      ) : 
      <div>
        <p>아직 댓글이 없음둥</p>
      </div>




  return(
    <div className={classes.reviewArea}>
      <h3>댓글 목록</h3>
      <hr></hr>
      <ul>
        {reviewItems}
      </ul>
      <form className={classes.formArea} onSubmit={onSubmit}>
        <Input 
          placeholder='댓글 입력' 
          fullWidth={true}
          onChange={onChange}
          endAdornment={<Button type="submit" variant="contained" color="primary">제출</Button>}
          ></Input>
      </form>
    </div>
  )
}

export default Reviews