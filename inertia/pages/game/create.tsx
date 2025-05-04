import GameForm from "~/lib/components/game/game-form";
import { TagType } from "~/types/react_types";

export default function CreateGame({ tags }: { tags: TagType[] }) {

    function onSubmit(form: any) {
        form.post(`/game`)
    }

    return (
        <GameForm onSubmit={onSubmit} tags={tags}></GameForm>
    )
}