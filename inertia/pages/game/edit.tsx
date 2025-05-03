import GameForm from "~/lib/components/game/game-form";

import { GameCardType, GameTagType } from "~/lib/components/ui/game/section-card";

export default function EditGame({ game, tags }: { game: GameCardType, tags: GameTagType[] }) {

    function onSubmit(form: any) {
        form.put(`/game/${game.id}`)
    }

    return (
        <GameForm onSubmit={onSubmit} game={game} tags={tags}></GameForm>
    )
}