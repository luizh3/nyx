import { Plus } from "lucide-react";
import { Label } from "../label";
import PriceLabel from "../../game/price-label";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { GameType } from "~/types/react_types";

export default function GameCard({
    game,
    variant = "vertical",
    action = "redirect",
    onClicked,
    selected
}: {
    game: GameType;
    variant?: "vertical" | "horizontal";
    action?: "redirect" | "selected";
    onClicked?: any,
    selected?: boolean
}) {

    const [isSelected, setIsSelected] = useState(selected);

    const handleClicked = () => {

        if (!game.id) {
            return
        };

        if (action == "selected") {
            onClicked(game.id)
            setIsSelected((value) => !value)
            return;
        }

        router.visit(`/game/${game.id}`);

    };

    const isHorizontal = variant === "horizontal";

    return (
        <div
            className={`flex ${isHorizontal ? `flex-row rounded ${isSelected ? 'bg-indigo-600' : 'bg-muted/50'}` : "flex-col"} gap-4 cursor-pointer w-full`}
            onClick={handleClicked}
        >
            <div
                className={`  ${isHorizontal ? "w-54 h-24" : "w-full h-80"} rounded bg-muted/50 bg-[url(${game.poster_image_url})] bg-cover bg-center group `} >
                <div className="transition-all delay-150 hidden group-hover:flex bg-black/70 w-full h-full rounded items-center justify-center">
                    <Label className="gap-4">
                        <Plus />
                    </Label>
                </div>
            </div>

            <div className={`flex flex-col gap-4 ${isHorizontal ? "justify-center" : "justify-between"}`}>
                <label className="font-medium">{game.name}</label>
                <PriceLabel
                    discount={game.percentage_discount}
                    liquid_price={game.liquid_price}
                    price={game.price}
                />
            </div>
        </div>

    );
}
