import Game from "#models/game"; `
`
import { GameDTO } from "../dtos/GameDTO.js";

export default class GameService {

    async store(game: GameDTO): Promise<Game> {

        const gameCreated = await Game.create({
            name: game.name,
            liquidPrice: game.liquid_price,
            percentageDiscount: game.percentage_discount,
            price: game.price,
            posterImageUrl: game.poster_image_url,
        })

        return gameCreated;
    }

}