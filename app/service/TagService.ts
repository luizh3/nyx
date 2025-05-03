import Tag from "#models/tag";
import { TagDTO } from "../dtos/TagDTO.js";
import TagMapper from "../mappers/TagMapper.js";

export default class TagService {

    async findAll(): Promise<TagDTO[]> {
        return (await Tag.query()).map((game) => {
            return TagMapper.toDTO(game);
        })
    }

}