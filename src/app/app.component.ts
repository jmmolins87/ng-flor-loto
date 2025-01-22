import { Component } from '@angular/core';
import { SharedService } from './public/shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public sharedService: SharedService) {}
}
