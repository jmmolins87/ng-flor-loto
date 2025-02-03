import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent {

  public visible: boolean = false;

  showDialogMessage() {
    this.visible = true;
  }

}
