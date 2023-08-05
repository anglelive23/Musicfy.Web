import { IImage } from "./image";

export interface ICategory {
    id: number;
    name: string;
    image: IImage;
    imageId: number;
    isDeleted: boolean;
    songs: any[];
    description: string;
}
