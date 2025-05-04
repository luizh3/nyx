import vine from '@vinejs/vine'

export const createSectionValidator = vine.compile(
    vine.object({
        description: vine.string().maxLength(200),
        games_id: vine.array(vine.number()).optional(),
        max_elements: vine.number(),
        min_elements: vine.number()
    })
)