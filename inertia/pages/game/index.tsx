import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

import InputLabel from "~/lib/components/input-label";
import { MultiSelect } from "~/lib/components/multi-select";
import GameCard from "~/lib/components/ui/game/game-card";
import { TagType, GameType } from "~/types/react_types";

export default function ListGames({ games, tags }: { games: GameType[], tags: TagType[] }) {

    const [nameFilter, setNameFilter] = useState('');
    const [gamesFilteres, setGamesFiltered] = useState<GameType[]>([]);
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
        <div className="gap-6 pl-12 pr-12 pt-6 pb-6 flex flex-col">
            <div className="flex justify-between">
                <Label className="text-xl font-bold">Games</Label>
                <Label className="text-sm text-gray-300">Total results: {gamesFilteres.length}</Label>
            </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
                {gamesFilteres.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </div>
        </div>)
}