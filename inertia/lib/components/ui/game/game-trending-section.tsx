import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { GameType, SectionType } from "~/types/react_types"

export default function GameTrendingSection({ section }: { section: SectionType | undefined }) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {
                    section?.games.map((game: GameType, index: number) => {
                        return <CarouselItem key={index}>
                            <img src={`${game.poster_image_url}`} alt="Treding Game Image" className="w-full h-80 object-fill rounded" />
                        </CarouselItem>
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}


