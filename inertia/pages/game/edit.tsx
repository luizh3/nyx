import GameForm from "~/lib/components/game/game-form";

import { GameCardType } from "~/lib/components/ui/game/section-card";

export default function EditGame({ game }: { game: GameCardType }) {

    function onSubmit(form: any) {
        form.put(`/game/${game.id}`)
    }

    return (
        <GameForm onSubmit={onSubmit} game={game}></GameForm>
    )
}