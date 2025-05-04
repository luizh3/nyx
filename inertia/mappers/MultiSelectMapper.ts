import { TagType } from "~/types/react_types";

export default class MultiSelectMapper {
    static fromTag(tag: TagType) {
        return {
            value: String(tag.id),
            label: tag.description
        }
    }

    static fromTagList(tags: TagType[]): { value: string, label: string }[] {
        return tags?.map((tag) => {
            return MultiSelectMapper.fromTag(tag);
        })
    }
}