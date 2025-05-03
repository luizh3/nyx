import Tag from '#models/tag'
import { TagDTO } from '../dtos/TagDTO.js'

export default class TagMapper {
    static toDTO(tag: Tag): TagDTO {
        return {
            id: tag.id,
            description: tag.description
        }
    }

}