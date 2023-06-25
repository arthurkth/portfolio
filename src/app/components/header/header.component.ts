import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  constructor() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnInit(): void {}
}
