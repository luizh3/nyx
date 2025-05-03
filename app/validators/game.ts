import vine, { SimpleMessagesProvider } from '@vinejs/vine'


export const createGameValidator = vine.compile(
    vine.object({
        poster_image_url: vine.string(),
        name: vine.string(),
        percentage_discount: vine.number().withoutDecimals(),
        price: vine.number().positive(),
        liquid_price: vine.number().positive(),
        description: vine.string().maxLength(200),
        tags: vine.array(vine.number()).optional()
    })
)

const fields = {
    poster_image_url: 'poster url',
    name: 'name',
    percentage_discount: 'percentage discount',
    price: 'price',
    liquid_price: 'liquid price',
    tags: 'tags',
    description: 'description'
}

vine.messagesProvider = new SimpleMessagesProvider({}, fields)
