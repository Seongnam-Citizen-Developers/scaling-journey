import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState,useEffect } from 'react'
import { Input,Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab';
import {getReview,postReview} from '../../lib/sungnamDevelopers/apis'
import { reviewPager } from './Helper';

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
  const [currentPage, setCurrentPage] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
  const [userInput, setInput] = useState('')

  useEffect(() =>{
    const fetchData = async()=>{
      const fetchedReviews = await getReview(props.boardgameId)
      const adjustedReviews = reviewPager(fetchedReviews)
      console.log('adjustedReviews',adjustedReviews)
      setMaxPage(adjustedReviews.length)
      console.log('maxPage',maxPage)
      setview(adjustedReviews.pageReviews[currentPage])
      // setview(adjustedReviews.pageReviews[maxPage])
      console.log('reviews',reviews)
      
    }
    fetchData()
  },[currentPage]) 
  

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
      await postReview(props.boardgameId,userInput)
      const test = await getReview(props.boardgameId)
      // setview([...reviews,res])
      console.log(test)
      clearInput()
    }
  
  }
  const clearInput = () =>{
    setInput('')
    const Input = document.querySelector('Input')
    Input.value = ''
  }

  const pageChange = (e,pagenumber)=>{
    console.log(e)
    const newPage = pagenumber -1
    setCurrentPage(newPage)
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

  const pagination = maxPage > 0 ? 
  <Pagination 
  count={maxPage}
  onChange = {pageChange}
  // showLastButton = {true}
  ></Pagination>
  :<div>
    테스트
  </div>



  return(
    <div className={classes.reviewArea}>
      <h3>댓글 목록</h3>
      <hr></hr>
      <ul>
        {reviewItems}
      </ul>
        {pagination}
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