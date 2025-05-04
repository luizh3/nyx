import { Head } from "@inertiajs/react";
import GameForm from "~/lib/components/game/game-form";
import { TagType } from "~/types/react_types";

export default function CreateGame({ tags }: { tags: TagType[]; }) {

    function onSubmit(form: any) {
        form.post(`/game`);
    }

    return (
        <>
            <Head title="Create Game" />
            <GameForm onSubmit={onSubmit} tags={tags}></GameForm>
        </>
    );
}