import { GameType, SectionType } from "~/types/react_types";
import { Head } from "@inertiajs/react";
import SectionForm from "~/lib/components/section/section-form";

export default function SectionList(
    {
        games,
        section
    }: {
        games: GameType[],
        section: SectionType;
    }) {

    function handleSubmit(form: any) {
        form.put(`/section/${section.id}`);
    }

    return (
        <>
            <Head title="Edit Section" />
            <SectionForm
                games={games}
                section={section}
                buttonSubmitLabel="Update"
                onSubmit={handleSubmit}>
            </SectionForm>
        </>
    );
}