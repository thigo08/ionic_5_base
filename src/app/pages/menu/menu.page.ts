import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedIndex = 0;

  public appPages = [
    {
      title: 'First page with Tabs',
      url: '/menu/first',
      icon: 'mail'
    },
    {
      title: 'Second page with Tabs',
      url: '/menu/second',
      icon: 'paper-plane'
    }
  ];

  constructor() {

  }

  ngOnInit() {
    const path = window.location.pathname.split('menu/')[1];
    console.log(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
