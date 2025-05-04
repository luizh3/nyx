import Tag from "#models/tag";
import { TagDTO } from "../dtos/tag_dto.js";
import TagMapper from "../mappers/tag_mapper.js";

export default class TagService {

    async findAll(): Promise<TagDTO[]> {
        return (await Tag.query()).map((game) => {
            return TagMapper.toDTO(game);
        })
    }

}