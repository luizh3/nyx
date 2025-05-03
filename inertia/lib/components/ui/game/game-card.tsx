import { router } from "@inertiajs/react";
import PriceLabel from "../../game/price-label";
import { GameCardType } from "./section-card";
import { Plus } from "lucide-react"
import { Label } from "../label";

export default function GameCard({ game }: { game: GameCardType }) {

    const handleClicked = () => {

        if (!game.id) {
            return;
        }

        router.visit(`/game/${game.id}`)
    }

    return (
        <div className="flex flex-col gap-4" onClick={handleClicked}>
            <div className={`w-full rounded-xl h-80 bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover group`}>
                <div className="transition-all delay-150 hidden group-hover:flex bg-black/70 w-full h-full rounded items-center justify-center">
                    <Label className="gap-4"><Plus /></Label>
                </div>
            </div>
            <label className="font-medium">
                {game.name}
            </label>
            <PriceLabel discount={game.percentage_discount} liquid_price={game.liquid_price} price={game.price}></PriceLabel>
        </div>
    )
}