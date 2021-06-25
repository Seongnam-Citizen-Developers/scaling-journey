import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { game } from '../../lib/boardgameAtlas/interfaces'
import { getgameDetail } from '../detail/Helper'

interface NoResultProps {
  games: game[]
}

function getRandomIndexes(games: game[]): number[] {
  let length = games.length
  let array: number[] = []
  if (length < 4) {
    for (let i = 0; i < length; i++) {
      array.push(i)
    }
  } else {
    while (array.length !== 3) {
      let randomInt = Math.floor(Math.random() * length)
      if (!array.includes(randomInt)) {
        array.push(randomInt)
      }
    }
  }
  return array
}

const NoResult: React.FC<NoResultProps> = ({ games }) => {
  // const onClick = (data: any) => {
  //   console.log(data.currentTarget.value)
  //   setMechanics(data.currentTarget.value)
  //   setPhase('request')
  // }
  const [randomIndexes, setRandomIndexes] = useState<number[]>([])
  useEffect(() => {
    setRandomIndexes(getRandomIndexes(games))
  }, [games])
  const history = useHistory()
  return games.length === 0 ? (
    <></>
  ) : (
    <>
      <p>정확히 일치하는 게임이 없어요 ㅠㅠ</p>
      <p>아래의 게임은 어떠신가요?</p>

      {randomIndexes.map((randomIndex, index) => (
        <div
          key={index}
          onClick={() => {
            history.push(`/detail/${games[randomIndex].id}`)
          }}
        >
          <img src={games[randomIndex].image_url} alt="" width="40%" />
          {getgameDetail(games[randomIndex]).name}
        </div>
      ))}
    </>
  )
}

export default NoResult
