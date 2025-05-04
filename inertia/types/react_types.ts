export interface TagType {
    id: number
    description: string,
}

export interface SectionType {
    id: number;
    description: string;
    games: GameType[];
    max_elements: number;
    min_elements: number;
}

export interface GameType {
    id?: number;
    poster_image_url: string;
    name: string;
    percentage_discount: string;
    price: string;
    liquid_price: string;
    tags: TagType[];
    description: string;
}