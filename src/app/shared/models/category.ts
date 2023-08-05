export interface ICategory {
    Id: number;
    Name: string;
    Image: IImage;
    ImageId: number;
    IsDeleted: boolean;
    Songs: any[];
    Description: string;
}

export interface IImage {
    Id: number;
    Path: string;
    Description: string;
}