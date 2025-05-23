import Section from "#models/section";
import { SectionDTO } from "../dtos/section_dto.js";
import GamerMapper from "./game_mapper.js";

export default class SectionMapper {
    static toDTO(section: Section): SectionDTO {
        return {
            id: section.id,
            description: section.description,
            games: GamerMapper.toDTOList(section.games),
            max_elements: section.maxElements,
            min_elements: section.minElements,
            games_id: []
        }
    }
}