import { useEffect, useState } from "react";
import InputLabel from "~/lib/components/input-label";
import { MultiSelect } from "~/lib/components/multi-select";
import GameCard from "~/lib/components/ui/game/game-card";
import { GameCardType, GameTagType } from "~/lib/components/ui/game/section-card";

export default function ListGames({ games, tags }: { games: GameCardType[], tags: GameTagType[] }) {

    const [nameFilter, setNameFilter] = useState('');
    const [gamesFilteres, setGamesFiltered] = useState<GameCardType[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tagsListSelected = tags.map((tag) => {
        return { value: String(tag.id), label: tag.description }
    })

    useEffect(() => {
        setGamesFiltered(games.filter((game) => {
            const nameMatches = game.name.toLowerCase().includes(nameFilter.toLowerCase());
            const tags = game.tags ?? [];
            const tagsMatch = selectedTags.length === 0 || tags.some(tag => selectedTags.includes(String(tag.id)));
            return nameMatches && tagsMatch;
        }));
    }, [nameFilter, selectedTags])

    return (
        <div className=" gap-6 pl-12 pr-12 pt-6 pb-6 flex flex-col ">
            <InputLabel
                label=""
                placeholder="Search by name..."
                onChange={event => setNameFilter(event.target.value)}
            />
            <MultiSelect
                options={tagsListSelected}
                onValueChange={setSelectedTags}
                defaultValue={selectedTags}
                placeholder="Select tags"
                variant="inverted"
                animation={0}
                maxCount={7}
            />
            <div className="grid grid-cols-7 gap-6">
                {gamesFilteres.map((game) => {
                    return <GameCard game={game}></GameCard>
                })}
            </div>
        </div>)
}