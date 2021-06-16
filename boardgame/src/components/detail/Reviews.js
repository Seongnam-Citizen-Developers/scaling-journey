import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState,useEffect } from 'react'
import { FormControl,Input,Button } from '@material-ui/core'
import getReview from '../../lib/sungnamDevelopers/apis'

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
  const [reviews, setview] = useState([])

  useEffect(() =>{
    const fetchData = async()=>{
      const fetchedReviews = await getReview(props.boardgameId)
      setview(fetchedReviews)
      
    }
    fetchData()
  },[]) 



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
      <ul>
        {reviewItems}
      </ul>
      <FormControl className={classes.formArea}>
        <Input 
          placeholder='댓글 입력' 
          fullWidth={true}
          endAdornment={<Button variant="contained" color="primary">제출</Button>}
          ></Input>
      </FormControl>
    </div>
  )
}

export default Reviews