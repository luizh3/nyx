import { GameType } from "~/types/react_types";
import SectionForm from "~/lib/components/section/section-form";
import { Head } from "@inertiajs/react";


export default function SectionList({ games }: { games: GameType[]; }) {

    function handleSubmit(form: any) {
        form.post(`/section`);
    }

    return (
        <>
            <Head title="Create Section" />
            <SectionForm games={games} onSubmit={handleSubmit}></SectionForm>
        </>
    );
}