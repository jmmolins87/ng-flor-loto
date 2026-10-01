import { Component, HostListener, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

type SpeedDialItem = MenuItem & {
  image?: string;
};

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent {

  @Input()
  public items: SpeedDialItem[] | undefined;
  @Input()
  public showIcon: string = "pi pi-share-alt";

  public isOpen: boolean = false;

  @HostListener('document:click')
  onDocumentClick() {
    this.isOpen = false;
  }

  toggle(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  onItemClick(event: MouseEvent, item: SpeedDialItem) {
    event.stopPropagation();
    item.command?.({ originalEvent: event, item });
    this.isOpen = false;
  }

  getItemTransform(index: number): string {
    return `translateY(-${(index + 1) * 5.5}rem)`;
  }
}
