import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';

declare global {
  interface Window {
    initWhatsAppWidget: (options: { phone: string; text: string; position: string }) => void;
  }
}

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
    this.loadWhatsAppWidget();
  }

  loadWhatsAppWidget() {
    const script = document.createElement('script');
    script.src = 'https://static.getbutton.io/widget-send-button/js/init.js'; // URL del widget de WhatsApp
    script.async = true;
    script.onload = () => {
      // Inicializa el widget de WhatsApp aquí si es necesario
      window.initWhatsAppWidget({
        phone: '655929164',
        text: '¡Hola! ¿Cómo puedo ayudarte?',
        position: 'right'
      });
    };
    const widgetElement = document.getElementById('whatsapp-chat-widget');
    if (widgetElement) {
      widgetElement.appendChild(script);
    }
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