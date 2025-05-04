import { router } from "@inertiajs/react"
import { Edit2Icon, Gamepad2 } from "lucide-react"
import { Button } from "~/lib/components/ui/button"
import { Label } from "~/lib/components/ui/label"
import { SectionType } from "~/types/react_types"

export default function ListSections({ sections }: { sections: SectionType[] }) {

    function handleClicked(id: number) {
        router.visit(`/section/${id}/edit`)
    }

    return (
        <div className="flex h-full">
            <div className="w-full pl-12 pr-12 pt-6 pb-6  flex flex-col gap-6">
                <div className="flex justify-between">
                    <Label className="text-xl font-bold">Register Game</Label>
                    <Label className="text-sm text-gray-300">Total results: {sections.length}</Label>
                </div>
                <div className="bg-muted/25 p-4 gap-1 flex flex-col w-full h-full rounded items-center">
                    {
                        sections.map((section, key) => {
                            return <div key={key} onClick={() => {
                                handleClicked(section.id)
                            }} className="w-full h-24 bg-muted/50 hover:bg-indigo-600 rounded items-center flex p-6 justify-between cursor-pointer">
                                <div className="flex flex-col gap-4">
                                    <Label className="font-medium">
                                        {section.description}
                                    </Label>
                                    <Label>
                                        <Gamepad2 />
                                        {section.games.length}
                                    </Label>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Edit2Icon />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}