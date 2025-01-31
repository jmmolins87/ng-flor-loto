import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;
  public showSkeleton: boolean = true;

  constructor(private fb: FormBuilder, private _messageService: MessageService ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1000)
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        to_email: 'flordelotosegovia@gmail.com'
      };

      emailjs.send('service_6tb3ps3', 'template_dpt3vlk', templateParams, '_JM6-N2BcvGJM05T_')
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully', response.status, response.text);
          this._messageService.add({ severity: 'success', summary: 'Correo enviado correctamente', detail: 'Te responderemos lo antes posible' });
        }, (error) => {
          console.error('Error sending email', error);
          this._messageService.add({ severity: 'error', summary: '¡¡Vaya!!', detail: `Algo salió mal: ${error}` });
        });
    }

    this.contactForm.reset();
  }
}