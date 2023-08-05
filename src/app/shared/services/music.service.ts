import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from 'src/app/shared/models/category';
import { UrlEndPoints } from '../constants/url-endpoints';
import { map, shareReplay } from 'rxjs';
import { IArtist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _http: HttpClient) { }

  // Categories
  private categoriesUrl: string = 'api/odata/categories';
  categories$ = this._http
  .get<ICategory[]>(UrlEndPoints.apiRoot + this.categoriesUrl + `?$expand=Image`)
  .pipe(
    map((data: any) => {
      return data['value'] as ICategory[];
    }),
    shareReplay(1)
  );

  // Artists
  private aristsUrl: string = 'api/odata/artists';
  artists$ = this._http
  .get<IArtist[]>(UrlEndPoints.apiRoot + this.aristsUrl + `?$expand=image`)
  .pipe(
    map((data: any) => {
      return data['value'] as IArtist[];
    }),
    shareReplay(1)
  );


}
