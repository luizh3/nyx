import type Game from "#models/game";
import { GameDTO } from "../dtos/GameDTO.js";
import TagMapper from "./TagMapper.js";

export default class GamerMapper {

    static toDTO(game: Game): GameDTO {
        return {
            id: game.id,
            liquid_price: game.liquidPrice,
            percentage_discount: game.percentageDiscount,
            poster_image_url: game.posterImageUrl,
            name: game.name,
            price: game.price,
            description: game.description,
            tags_id: [],
            tags: game.tags?.map((tag) => {
                return TagMapper.toDTO(tag)
            },
            ) ?? []
        }
    }

    static toDTOList(games: Game[]): GameDTO[] {
        return games?.map((game) => {
            return GamerMapper.toDTO(game);
        }) ?? [];
    }

}