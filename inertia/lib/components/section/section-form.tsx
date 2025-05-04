
import { useEffect, useState } from "react"

import InputLabel from "~/lib/components/input-label"
import { Label } from "~/lib/components/ui/label"
import GameSelection from "~/lib/components/ui/game/game-selection"
import { Button } from "~/lib/components/ui/button"
import { GameType, SectionType } from "~/types/react_types"

import { useForm } from "@inertiajs/react"
import { Trash2Icon } from "lucide-react"

type SectionFormData = {
    description: string,
    games_id: number[],
    max_elements: number,
    min_elements: number
}

export default function SectionForm(
    {
        section,
        games,
        onSubmit,
        buttonSubmitLabel = "Registrar"
    }: {
        games: GameType[],
        section?: SectionType | undefined,
        onSubmit: any,
        buttonSubmitLabel?: string
    }) {

    const [selects, setSelecteds] = useState<number[]>(
        section?.games.map(game => game?.id ?? 0) ?? []
    )

    const [nameFilter, setNameFilter] = useState('');
    const [gamesFilteres, setGamesFiltered] = useState<GameType[]>([]);

    const form = useForm<SectionFormData>({
        description: section?.description ?? '',
        games_id: [],
        max_elements: section?.max_elements ?? 0,
        min_elements: section?.min_elements ?? 0
    })

    const { data, setData, errors } = form;

    function handleSubmit(event: any) {
        event.preventDefault()
        onSubmit(form)
    }

    function handleDelete(event: any) {
        event.preventDefault()
        form.delete(`/section/${section?.id}`)
    }

    useEffect(() => {
        setData('games_id', selects)
    }, [selects])

    useEffect(() => {
        setGamesFiltered(games.filter((game) => {
            return game.name.toLowerCase().includes(nameFilter.toLowerCase());
        }));
    }, [nameFilter])

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="pt-14 w-3/4 gap-6 flex flex-col">
                <Label className="text-xl font-bold">Section</Label>

                {section && <Button onClick={handleDelete} className="w-42" type="button" variant="destructive">Delete <Trash2Icon /> </Button>}

                <InputLabel
                    label="Description"
                    placeholder="Search by name..."
                    onChange={event => setData('description', event.target.value)}
                    error={errors.description}
                    value={data.description}
                ></InputLabel>

                <div className="flex gap-4">
                    <InputLabel
                        label="Min elements"
                        placeholder="min elements visible..."
                        onChange={event => setData('max_elements', Number(event.target.value))}
                        error={errors.max_elements}
                        value={data.max_elements}
                    ></InputLabel>
                    <InputLabel
                        label="Max elements"
                        placeholder="max elements visible..."
                        onChange={event => setData('min_elements', Number(event.target.value))}
                        error={errors.min_elements}
                        value={data.min_elements}
                    ></InputLabel>
                </div>

                <div className="bg-muted/25 p-4 gap-4 flex flex-col w-full">
                    <InputLabel
                        label=""
                        placeholder="Search by name..."
                        onChange={event => setNameFilter(event.target.value)}
                    >
                    </InputLabel>
                    <GameSelection games={gamesFilteres} selecteds={selects} setSelecteds={setSelecteds} />
                </div>
                <Button type="submit">{buttonSubmitLabel}</Button>
            </form>
        </div>
    )
}