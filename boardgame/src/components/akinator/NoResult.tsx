import { useHistory, useLocation } from "react-router-dom"
import { game } from "../../lib/boardgameAtlas/interfaces"

interface NoResultProps {
  games: game[]
}

const NoResult: React.FC<NoResultProps> = ({games}) => {

  // const onClick = (data: any) => {
  //   console.log(data.currentTarget.value)
  //   setMechanics(data.currentTarget.value)
  //   setPhase('request')
  // }
  const history = useHistory()
  const location = useLocation()
  return games.length === 0 ? (
    <>
      우린조졌어 아무것도 없어 
    </>
  ) : (
    <>
      {games.map((game, index) => 
        index < 3 && (<div key={index} onClick={()=>{
          history.push(`${location.pathname}detail/${game.id}`, )
        }}>
          <img src={game.image_url} alt="" width="40%" />
          {game.name}
        </div>)
      )}
    </>
  )
}

export default NoResult