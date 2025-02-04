import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;
  public showSkeleton: boolean = true;
  public emailSent: boolean = false;
  public emailError: boolean = false;
  public sendingEmail: boolean = false;

  constructor(private fb: FormBuilder) { }

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
      this.sendingEmail = true;
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