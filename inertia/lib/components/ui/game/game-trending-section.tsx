import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

interface GamTreedingInfoType {
    id: number;
    poster_image_url: string;
}

interface GameTrendingType {
    games: GamTreedingInfoType[]
}

export default function GameTrendingSection({ infos }: { infos: GameTrendingType }) {
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
                    infos.games.map((game: GamTreedingInfoType, index: number) => {
                        return <CarouselItem key={index}>
                            <img src={`${game.poster_image_url}`} alt="Treding Game Image" className="w-full h-80 object-fill rounded" />
                        </CarouselItem>
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}


