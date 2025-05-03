import { GameTagType } from "~/lib/components/ui/game/section-card";

export default class MultiSelectMapper {
    static fromTag(tag: GameTagType) {
        return {
            value: String(tag.id),
            label: tag.description
        }
    }

    static fromTagList(tags: GameTagType[]): { value: string, label: string }[] {
        return tags?.map((tag) => {
            return MultiSelectMapper.fromTag(tag);
        })
    }
}