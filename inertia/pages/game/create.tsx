import GameForm from "~/lib/components/game/game-form";

export default function CreateGame() {

    function onSubmit(form: any) {
        form.post(`/game/`)
    }

    return (
        <GameForm onSubmit={onSubmit}></GameForm>
    )
}