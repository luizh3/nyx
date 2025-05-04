import Section from "#models/section";
import { SectionDTO } from "../dtos/section_dto.js";
import SectionMapper from "../mappers/section_mapper.js";

export default class SectionService {

    async findAll() {
        return (await Section.query().preload('games')).map((section) => {
            return SectionMapper.toDTO(section);
        })
    }

    async create(section: SectionDTO): Promise<SectionDTO> {

        const sectionCreated = await Section.create({
            description: section.description,
            maxElements: section.max_elements,
            minElements: section.min_elements
        });

        await sectionCreated.related('games').attach(section.games_id);

        return SectionMapper.toDTO(sectionCreated);
    }

    async findOneById(id: number): Promise<SectionDTO> {

        const section = await Section.query()
            .where('id', id)
            .preload('games')
            .firstOrFail()

        return SectionMapper.toDTO(section);

    }


    async update(section: SectionDTO): Promise<SectionDTO> {

        await Section
            .query()
            .where('id', section.id)
            .update({
                description: section.description,
                maxElements: section.max_elements,
                minElements: section.min_elements
            })

        const sectionUpdated = await Section.findOrFail(section.id)

        await sectionUpdated.related('games').sync(section.games_id)

        return SectionMapper.toDTO(sectionUpdated);

    }

    async delete(id: number) {

        await Section.query()
            .where('id', id)
            .delete();

    }

}