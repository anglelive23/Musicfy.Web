import { IImage } from "./image";

export interface IGenre {
    Id: number;
    Name: string;
    Songs?: any[];
    Image?: IImage;
    ImageId?: number;
    IsDeleted: boolean;
    Description?: string
}