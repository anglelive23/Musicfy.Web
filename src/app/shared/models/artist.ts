import { IAlbum } from "./album";
import { IImage } from "./image";

export interface IArtist {
    id: number;
    name: string;
    brief: string;
    isVerfied: boolean;
    image?: IImage;
    imageId?: number;
    albums?: IAlbum[];
    songs?: any[];
    isFeatured?: boolean;
}