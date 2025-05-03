import Game from "#models/game"; `
`
import { GameDTO } from "../dtos/GameDTO.js";
import GamerMapper from "../mappers/GameMapper.js";

export default class GameService {

    async update(game: GameDTO): Promise<GameDTO> {

        await Game
            .query()
            .where('id', game.id)
            .update({
                name: game.name,
                liquidPrice: game.liquid_price,
                percentageDiscount: game.percentage_discount,
                price: game.price,
                posterImageUrl: game.poster_image_url,
                description: game.description
            })

        const gameUpdated = await Game.findOrFail(game.id)

        return GamerMapper.toDTO(gameUpdated);

    }

    async store(game: GameDTO): Promise<GameDTO> {

        const gameCreated = await Game.create({
            name: game.name,
            liquidPrice: game.liquid_price,
            percentageDiscount: game.percentage_discount,
            price: game.price,
            posterImageUrl: game.poster_image_url,
            description: game.description
        })

        const tagIds: number[] = game.tags?.map((tag) => { return tag.id }) ?? [];


        await gameCreated.related('tags').attach(
            [1, 2]
        );


        return GamerMapper.toDTO(gameCreated);
    }

    async findOneById(id: number): Promise<GameDTO> {

        const game = await Game.query()
            .where('id', id)
            .preload('tags')
            .firstOrFail()

        console.log("Aqui")
        console.log(game)

        return GamerMapper.toDTO(game);

    }

}