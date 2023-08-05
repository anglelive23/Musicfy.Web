import { IImage } from "./image";

export interface ICategory {
    Id: number;
    Name: string;
    Image: IImage;
    ImageId: number;
    IsDeleted: boolean;
    Songs: any[];
    Description: string;
}
