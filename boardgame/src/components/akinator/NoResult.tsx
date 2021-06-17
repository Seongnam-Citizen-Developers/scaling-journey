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
  
  return games.length === 0 ? (
    <>
      우린조졌어 아무것도 없어 
    </>
  ) : (
    <>
      {games.map((game, index) => 
        index < 3 && (<div key={index}>{game.name}
          
        </div>)
      )}
    </>
  )
}

export default NoResult