import GameCard from "./game-card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export interface GameTagType {
    id: number
    description: string,
}

export interface GameCardType {
    id?: number;
    poster_image_url: string;
    name: string;
    percentage_discount: string;
    price: string;
    liquid_price: string;
    tags: GameTagType[],
    description: string
}

interface SectionInfoType {
    title: string;
    games: GameCardType[];
}

interface NumberCards {
    max: number;
    min: number
}

interface ConfigSectionType {
    numberCards: NumberCards
}

export default function SectionCard({ infos, config }: { infos: SectionInfoType, config?: ConfigSectionType }) {
    return (
        <div className="w-full flex flex-col gap-4">
            {infos.title && <label className="text-xl font-bold">
                {infos.title}
            </label>}
            <div className="pl-16 pr-16">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {
                            infos.games.map((game: GameCardType, index: number) => {
                                return <CarouselItem key={index}
                                    className={
                                        `md:basis-1/${config?.numberCards?.min ?? 2}
                                         lg:basis-1/${config?.numberCards?.max ?? 3}`
                                    }>
                                    <div className="p-1">
                                        <GameCard game={game}></GameCard>
                                    </div>
                                </CarouselItem>
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>

                </Carousel>
            </div>
        </div>
    )
}


