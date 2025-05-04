import { TagDTO } from "./TagDTO.js"

export interface GameDTO {
    id: number,
    poster_image_url: string,
    name: string,
    percentage_discount: number,
    price: number,
    liquid_price: number,
    description: string,
    tags?: TagDTO[]
    tags_id: number[]
}