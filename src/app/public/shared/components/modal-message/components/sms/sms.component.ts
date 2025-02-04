import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  public messages: Message[] = [];
  public chatForm: FormGroup;
  public targetPhone: string = '+34655929164';

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      userPhone: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      userMessage: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  }

  sendMessage() {
    if (this.chatForm.valid) {
      const { userPhone, userMessage } = this.chatForm.value;
      this.messages.push({ severity: 'info', summary: `Tú (${userPhone})`, detail: userMessage });

      // Guardar mensajes en localStorage para persistencia
      localStorage.setItem('chatMessages', JSON.stringify(this.messages));

      // Simulación de envío de mensaje al número fijo
      console.log(`Enviando mensaje a ${this.targetPhone}: ${userMessage}`);

      this.chatForm.reset();
    }
  }

  clearChat() {
    this.messages = [];
    localStorage.removeItem('chatMessages');
    console.log('Historial de chat borrado');
  }

}
