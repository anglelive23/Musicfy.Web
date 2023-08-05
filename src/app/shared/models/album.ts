import { IArtist } from "./artist";

export interface IAlbum {
    Id: number;
    Name: string;
    Description?: string;
    Artist?: IArtist;
    ArtistId: number;
    DateTime?: Date;
    IsDeleted: boolean;
    Songs?: any[]
}