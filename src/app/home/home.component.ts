import { Observable } from 'rxjs';
import { MusicService } from './../shared/services/music.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { UrlEndPoints } from '../shared/constants/url-endpoints';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  constructor(private _musicService: MusicService) {}
  
  public imagesUrl: string = UrlEndPoints.apiRoot + `images/`;
  categories$ = this._musicService.categories$;
  

  ngOnInit(): void {
    }

}
