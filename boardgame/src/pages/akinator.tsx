import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getBoardgames } from '../lib/boardgameAtlas/apis'
import Button from '@material-ui/core/Button'
import Players from '../components/akinator/Players'
import PlayTime from '../components/akinator/PlayTime'
import Category from '../components/akinator/Category'
import Mechanics from '../components/akinator/Mechanics'
import NoResult from '../components/akinator/NoResult'
import { game } from '../lib/boardgameAtlas/interfaces'
import { useHistory } from 'react-router-dom'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //최댓값은 제외, 최솟값은 포함
}
const Akinator: React.FC = () => {
  // const styles = useStyles()
  const [phase, setPhase] = useState<
    'category' | 'player' | 'playTime' | 'mechanics' | 'request' | 'noResult'
  >('category')
  const [numOfPeople, setNumOfPeople] = useState<number>()
  const [gnt, setGnt] = useState<number>(10)
  const [lxt, setLxt] = useState<number>(30)
  const [category, setCategory] = useState<string>()
  const [mechanics, setMechanics] = useState<string>()
  const [games, setGames] = useState<game[]>([])
  const history = useHistory()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function requestGetBoardgame(config: any) {
    const games = await getBoardgames(config)

    const pattern = /[가-힣]/
    const kGames = games.filter(game => {
      return (
        game.tags.filter(tag => {
          return pattern.test(tag)
        }).length !== 0
      )
    })
    console.log(kGames)

    if (kGames.length === 0) {
      setPhase('noResult')
    } else {
      if (phase !== 'noResult') {
        let idx: number = getRandomInt(0, kGames.length)
        history.push(`/detail/${kGames[idx].id}`)
      } else {
        setGames(kGames)
      }
    }
  }

  useEffect(() => {
    if (phase === 'request') {
      const config = {
        mechanics,
        categories: category,
        gt_min_playtime: gnt ? gnt - 1 : undefined,
        lt_max_playtime: lxt ? lxt + 1 : undefined,
        gt_max_players: numOfPeople ? numOfPeople - 1 : undefined,
        lt_min_players: numOfPeople ? numOfPeople + 1 : undefined,
        limit: 100,
      }
      requestGetBoardgame(config)
    } else if (phase === 'noResult') {
      const config = {
        gt_min_playtime: gnt ? gnt - 1 : undefined,
        lt_max_playtime: lxt ? lxt + 1 : undefined,
        gt_max_players: numOfPeople ? numOfPeople - 1 : undefined,
        lt_min_players: numOfPeople ? numOfPeople + 1 : undefined,
        limit: 100,
      }
      requestGetBoardgame(config)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, category, gnt, lxt, numOfPeople, mechanics])

  const reset = () => {
    setNumOfPeople(undefined)
    setGnt(10)
    setLxt(30)
    setCategory(undefined)
    setMechanics(undefined)
    setGames([])
    setPhase('category')
  }
  // getBoardgames
  return (
    <div>
      {phase === 'category' ? (
        <>
          <Category
            setPhase={setPhase}
            category={category}
            setCategory={setCategory}
          />
        </>
      ) : phase === 'player' ? (
        <>
          <Players
            setPhase={setPhase}
            numOfPeople={numOfPeople}
            setNumOfPeople={setNumOfPeople}
          />
        </>
      ) : phase === 'playTime' ? (
        <>
          <PlayTime
            setPhase={setPhase}
            gnt={gnt}
            setGnt={setGnt}
            lxt={lxt}
            setLxt={setLxt}
          />
        </>
      ) : phase === 'mechanics' ? (
        <>
          <Mechanics
            setPhase={setPhase}
            mechanics={mechanics}
            setMechanics={setMechanics}
          />
        </>
      ) : (
        <>
          <NoResult games={games} />
        </>
      )}
      {/* <Button onClick={onSubmit}>사진</Button> */}
      <Button
        onClick={() => {
          reset()
        }}
      >
        리셋
      </Button>
    </div>
  )
}

export default Akinator

export const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
})
