import GameForm from "~/lib/components/game/game-form";
import { GameTagType } from "~/lib/components/ui/game/section-card";

export default function CreateGame({ tags }: { tags: GameTagType[] }) {

    function onSubmit(form: any) {
        form.post(`/game`)
    }

    return (
        <GameForm onSubmit={onSubmit} tags={tags}></GameForm>
    )
}