import { GameCardType } from "./section-card";

export default function GameCard({ game }: { game: GameCardType }) {
    return (
        <div className="flex flex-col gap-4">
            <div className={`w-full rounded-xl h-80 bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover`}>
            </div>
            <label className="font-medium">
                {game.name}
            </label>
            <div className="w-full h-6 flex gap-2">
                <div className="bg-green-800 w-fit pl-2 pr-2 rounded">
                    <label className="text-sm text-green-300 font-bold">- 75 %</label>
                </div>
                <div className="flex gap-2">
                    <label className="line-through text-gray-700">
                        {game.price.toFixed(2)}
                    </label>
                    <label>
                        {game.liquid_price.toFixed(2)}
                    </label>
                </div>
            </div>
        </div>
    )
}