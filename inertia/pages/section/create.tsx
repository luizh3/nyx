import { GameType } from "~/types/react_types"
import SectionForm from "~/lib/components/section/section-form"


export default function SectionList({ games }: { games: GameType[] }) {

    function handleSubmit(form: any) {
        form.post(`/section`)
    }

    return (
        <SectionForm games={games} onSubmit={handleSubmit}></SectionForm>
    )
}