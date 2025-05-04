import Game from "#models/game"; `
`
import { GameDTO } from "../dtos/game_dto.js";
import GamerMapper from "../mappers/game_mapper.js";

export default class GameService {

    async findAll(): Promise<GameDTO[]> {
        return (await Game.query().preload('tags')).map((game) => {
            return GamerMapper.toDTO(game);
        })
    }

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

        await gameUpdated.related('tags').sync(game.tags_id)

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

        await gameCreated.related('tags').attach(game.tags_id);

        return GamerMapper.toDTO(gameCreated);
    }

    async findOneById(id: number): Promise<GameDTO> {

        const game = await Game.query()
            .where('id', id)
            .preload('tags')
            .firstOrFail()

        return GamerMapper.toDTO(game);

    }

}