import { useEffect, useState } from "react";
import InputLabel from "~/lib/components/input-label";
import GameCard from "~/lib/components/ui/game/game-card";
import { GameCardType } from "~/lib/components/ui/game/section-card";

export default function ListGames({ games }: { games: GameCardType[] }) {

    const [nameFilter, setNameFilter] = useState('');
    const [gamesFilteres, setGamesFiltered] = useState<GameCardType[]>([]);

    useEffect(() => {
        setGamesFiltered(games.filter((game) => {
            return game.name.toLowerCase().includes(nameFilter.toLowerCase());
        }));
    }, [nameFilter])

    return (
        <div className=" gap-6 pl-12 pr-12 pt-6 pb-6 flex flex-col ">
            <InputLabel
                label=""
                placeholder="Search by name..."
                onChange={event => setNameFilter(event.target.value)}
            />
            <div className="grid grid-cols-7 gap-6">
                {gamesFilteres.map((game) => {
                    return <GameCard game={game}></GameCard>
                })}
            </div>
        </div>)
}