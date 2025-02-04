import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  // Animation for the link
  public linkAnimation!: string;

  constructor(private _location: Location) {}  

  ngOnInit(): void {
      
  }

  scrollDown(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  goBack() {
    this._location.back();
  }

}
