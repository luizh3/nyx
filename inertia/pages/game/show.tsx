import { Head } from "@inertiajs/react";
import { Label } from "@radix-ui/react-label";
import { ShoppingCart } from "lucide-react";
import PriceLabel from "~/lib/components/game/price-label";
import { Badge } from "~/lib/components/ui/badge";
import { Button } from "~/lib/components/ui/button";
import { GameType } from "~/types/react_types";

export default function ShowGame({ game }: { game: GameType; }) {
    return (
        <>
            <Head title={game.name} />
            <div className={`w-full relative blur-lg rounded-xl h-96 bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover`}></div>
            <div className="h-full w-full flex items-center justify-center absolute top-0 left-0">
                <div className="w-2/4 h-3/4 flex flex-col gap-4">
                    <Label className="text-xl font-bold">{game.name}</Label>
                    <div className={`w-full rounded-xl h-96 bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover`}></div>
                    <PriceLabel discount={game.percentage_discount} liquid_price={game.liquid_price} price={game.price}></PriceLabel>
                    <Label className="text-sm font-medium">{game.description}</Label>
                    <div className="flex gap-4">{game.tags.map((tag) => {
                        return <Badge className="font-bold text-gray-300">{tag.description}</Badge>;
                    })}</div>
                    <Button> Add to cart <ShoppingCart /></Button>
                </div>
            </div>
        </>
    );
}