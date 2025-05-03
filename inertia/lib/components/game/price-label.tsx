
export default function PriceLabel({ discount, price, liquid_price }: { discount: string, price: string, liquid_price: string }) {
    return (
        <div className="h-42 h-6 flex gap-2">
            <div className="bg-green-800 w-fit pl-2 pr-2 rounded">
                <label className="text-sm text-green-300 font-bold">- {discount} %</label>
            </div>
            <div className="flex gap-2">
                <label className="line-through text-gray-700">
                    {price}
                </label>
                <label>
                    {liquid_price}
                </label>
            </div>
        </div>
    )
}