import GameForm from "~/lib/components/game/game-form";
import { TagType, GameType } from "~/types/react_types";

export default function EditGame({ game, tags }: { game: GameType, tags: TagType[] }) {

    function onSubmit(form: any) {
        form.put(`/game/${game.id}`)
    }

    return (
        <GameForm
            onSubmit={onSubmit}
            game={game}
            tags={tags}
            buttonSubmitLabel="Update"
        ></GameForm>
    )
}