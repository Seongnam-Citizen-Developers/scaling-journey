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
  
  return (
    <>
    {games.map((game, index)=>(
      <div key={index}>{game.name}
        {/* <Button onClick={onClick} value={mechanicId}>눌러봐요</Button> */}
      </div>
    ))}
    </>
  )
}

export default NoResult