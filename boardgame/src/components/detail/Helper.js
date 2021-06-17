import _ from 'lodash'

export function getgameDetail(game){
  const image_url = game.image_url
  const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const name = game.tags.filter(tag =>{
    return pattern.test(tag)
  })
  return {image_url:image_url,name:name[0]}
}

export function reviewPager(reviews){
  console.log(reviews)
  let newArray = []
  // for(let i =0 ; i<=reviews.length ; i+=3){
  //   console.log('slice',reviews.slice(i,i+3))
  //   console.log('i: ',i,'i.length: ',reviews.length)
  //   newArray.push(reviews.slice(i,i+3))
  // }
  newArray = _.chunk(reviews,3)
  console.log('newArray',newArray)
  return {'pageReviews':newArray,'length': newArray.length}
}