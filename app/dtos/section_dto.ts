import { GameDTO } from "./game_dto.js";

export interface SectionDTO {
    id: number;
    description: string;
    games?: GameDTO[];
    games_id: number[];
    min_elements: number;
    max_elements: number;
}