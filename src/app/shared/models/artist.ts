import { IAlbum } from "./album";
import { IImage } from "./image";

export interface IArtist {
    Id: number;
    Name: string;
    Brief: string;
    IsVerfied: boolean;
    Image?: IImage;
    ImageId?: number;
    Albums?: IAlbum[];
    Songs?: any[];
}