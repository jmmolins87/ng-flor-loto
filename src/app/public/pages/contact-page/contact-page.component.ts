import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public contactForm!: FormGroup;
  public showSkeleton: boolean = true;
  public emailSent: boolean = false;
  public emailError: boolean = false;
  public sendingEmail: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1000)
  }

  onInput(): void {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      if (control?.touched) {
        control.updateValueAndValidity();
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendingEmail = true;
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        to_email: 'flordelotosegovia@gmail.com'
      };
      emailjs.send('service_xi63c1h', 'template_jwnasja', templateParams, '_JM6-N2BcvGJM05T_')
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully', response.status, response.text);
          setTimeout(() => {
            this.emailSent = true;
            this.emailError = false;
            this.sendingEmail = false;
            setTimeout(() => {
              this.emailSent = false;
            }, 5000);
          }, 5000)
        }, (error) => {
          console.error('Error sending email', error);
          setTimeout(() => {
            this.emailSent = false;
            this.emailError = true;
            this.sendingEmail = false;
            setTimeout(() => {
              this.emailError = false;
            }, 5000);
          }, 5000)
        });
    }
    this.contactForm.reset();
  }
}
