import { IImage } from "./image";

export interface IGenre {
    id: number;
    name: string;
    songs?: any[];
    image?: IImage;
    iImageId?: number;
    isDeleted: boolean;
    description?: string
}