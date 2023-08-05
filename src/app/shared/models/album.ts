import { IArtist } from "./artist";

export interface IAlbum {
    id: number;
    name: string;
    description?: string;
    artist?: IArtist;
    artistId: number;
    dateTime?: Date;
    isDeleted: boolean;
    songs?: any[]
}