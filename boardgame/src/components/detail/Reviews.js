import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { FormControl,Input,Button } from '@material-ui/core'

const useStyles = makeStyles({
  reviewArea :{
    padding : "3% 3% 3% 3%",
    border : "2px solid red"
  },
  test :{
    width: "100%"
  }
})



const Reviews = () =>{
  const classes = useStyles()
  const [reviews, setview] = useState([{id:1, content:'dddd'},{id:2, content:'asee'}])
  const reviewItems = reviews.length > 0 ?
    reviews.map(review =>
      <li
        key={review.id}
      >
        {review.content}
      </li>
      ) : 
      <div>
        <p>아직 댓글이 없음둥</p>
      </div>
  return(
    <div className={classes.reviewArea}>
      <ol>
        {reviewItems}
      </ol>
      <FormControl className={classes.test}>
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