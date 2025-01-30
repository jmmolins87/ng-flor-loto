import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';


@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  @Output() showDialogEvent = new EventEmitter<void>();
  
  public whatsappForm: FormGroup;
  public visible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.whatsappForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.whatsappForm.valid) {
      const name = this.whatsappForm.get('name')!.value;
      const message = this.whatsappForm.get('message')!.value;
      const whatsappUrl = `https://wa.me/655929164?text=${encodeURIComponent(`Nombre: ${name}\nMensaje: ${message}`)}`;
      window.open(whatsappUrl, '_blank');
    }
  }

  showDialog() {
    this.visible = true;
  }

  triggerShowDialog() {
    this.showDialogEvent.emit();
  }
}