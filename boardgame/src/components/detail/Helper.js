export function getgameDetail(game){
  console.log('겟겜디',game)
  const image_url = game.image_url
  const pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const name = game.tags.filter(tag =>{
    return pattern.test(tag)
  })
  console.log('name',name)
  return {image_url:image_url,name:name[0]}
}
