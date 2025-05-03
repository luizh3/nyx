import PriceLabel from "../../game/price-label";
import { GameCardType } from "./section-card";

export default function GameCard({ game }: { game: GameCardType }) {
    return (
        <div className="flex flex-col gap-4">
            <div className={`w-full rounded-xl h-80 bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover`}>
            </div>
            <label className="font-medium">
                {game.name}
            </label>
            <PriceLabel discount={game.percentage_discount} liquid_price={game.liquid_price} price={game.price}></PriceLabel>
        </div>
    )
}