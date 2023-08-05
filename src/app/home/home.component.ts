import { MusicService } from './../shared/services/music.service';
import { Component, OnInit } from '@angular/core';
import { UrlEndPoints } from '../shared/constants/url-endpoints';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  constructor(private _musicService: MusicService) {}
  
  public imagesUrl: string = UrlEndPoints.apiRoot + `images/`;
  categories$ = this._musicService.categories$;
  featuredArtists$ = this._musicService.featuredArtists$;
  
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
      "<div class='nav-button visible owl-prev-b'>‹</div>",
      "<div class='nav-button visible owl-next-b'>›</div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    }

}
