import { Component, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent {

  @Input()
  public items: MenuItem[] | undefined;

  @Input()
  public showIcon: string = "pi pi-share-alt";

}
