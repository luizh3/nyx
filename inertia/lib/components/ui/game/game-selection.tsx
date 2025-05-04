import { GameType } from "~/types/react_types"
import GameCard from "./game-card"

type GameSelectionProps = {
    games: GameType[]
    selecteds: number[]
    setSelecteds: React.Dispatch<React.SetStateAction<number[]>>
}

export default function GameSelection({ games, selecteds, setSelecteds }: GameSelectionProps) {

    const handleClicked = (gameId: number) => {

        if (selecteds.includes(gameId)) {
            setSelecteds(selecteds.filter(item => item !== gameId))
            return;
        }

        setSelecteds([...selecteds, gameId])
    }

    return (
        <div className="flex flex-col gap-1">
            {games.map((game) => {

                const isSelected = !!game?.id && selecteds.includes(game.id)

                return <GameCard game={game} variant="horizontal" action="selected" onClicked={handleClicked} selected={isSelected}></GameCard>
            })}
        </div>
    )
}