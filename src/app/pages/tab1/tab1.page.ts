import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
