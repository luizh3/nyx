import { Button } from "~/lib/components/ui/button";
import { Label } from "~/lib/components/ui/label";
import { useForm } from '@inertiajs/react'
import InputLabel from "~/lib/components/input-label";
import { GameCardType } from "../ui/game/section-card";
import TextAreaLabel from "../text-area-label";

export default function GameForm({ onSubmit, game }: { onSubmit: any, game?: GameCardType }) {

    const form = useForm({
        poster_image_url: game?.poster_image_url ?? '',
        name: game?.name ?? '',
        percentage_discount: game?.percentage_discount ?? '0',
        price: game?.price ?? '0.00',
        liquid_price: game?.liquid_price ?? '0.00',
        description: game?.description ?? '',
        tags: [1, 2]
    })

    const { data, setData, errors } = form;

    function handleSubmit(event: any) {

        event.preventDefault()
        onSubmit(form)
    }

    function handlePercentageChanged(event: React.ChangeEvent<HTMLInputElement>) {

        const percentage = Number(event.target.value)
        const price = Number(data.price)

        const vlDiscount = (price * percentage) / 100
        const vlLiquidPrice = price - vlDiscount

        setData({
            ...data,
            percentage_discount: String(percentage),
            liquid_price: vlLiquidPrice.toFixed(2),
        })
    }

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-2/4 mt-12 mb-12">
                <Label className="text-xl font-bold">Register Game</Label>
                <form onSubmit={handleSubmit} className="justify-between items-center flex flex-col pt-16 h-full gap-12">
                    <div className="w-full flex flex-col gap-4">
                        <InputLabel
                            id="name"
                            name="name"
                            type="string"
                            label="Name"
                            value={data.name}
                            onChange={(event) => setData('name', event.target.value)}
                            error={errors.name}
                        />
                        <InputLabel
                            id="poster_image_url"
                            name="poster_image_url"
                            type="text"
                            label="Poster URL"
                            value={data.poster_image_url}
                            onChange={(event) => setData('poster_image_url', event.target.value)}
                            error={errors.poster_image_url}
                        />
                        <div className="flex gap-4">
                            <InputLabel
                                id="price"
                                name="price"
                                type="number"
                                label="Price"
                                value={data.price}
                                onChange={(event) => setData('price', event.target.value)}
                                error={errors.price}
                            />
                            <InputLabel
                                id="percentage_discount"
                                name="percentage_discount"
                                type="number"
                                label="Percentage Discount"
                                value={data.percentage_discount}
                                onChange={handlePercentageChanged}
                                error={errors.percentage_discount}
                            />
                            <InputLabel
                                id="liquid_price"
                                name="liquid_price"
                                type="number"
                                label="Liquid Price"
                                value={data.liquid_price}
                                error={errors.liquid_price}
                                disabled
                            />
                        </div>
                        <TextAreaLabel
                            placeholder="More about game..."
                            id="description"
                            name="description"
                            label="Description"
                            value={data.description}
                            error={errors.description}
                            onChange={event => setData('description', event.target.value)}
                            maxLength={200}
                        />
                        <div className="w-full h-48 border-2 border-dotted border-gray-800 rounded items-center flex justify-center p-2 bg-muted/50">
                            <div className={`blur-2xls h-full w-full bg-[url(${data?.poster_image_url})] bg-contain bg-center bg-no-repeat`}></div>
                        </div>
                    </div>
                    <Button type="submit" className="w-full">Register</Button>
                </form>

            </div>
        </div>

    )
}