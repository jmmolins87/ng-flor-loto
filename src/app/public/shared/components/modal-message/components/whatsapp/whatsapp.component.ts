import { Component, OnInit } from '@angular/core';
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

  public whatsappForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.whatsappForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]
      ],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  sendWhatsApp() {
    if (this.whatsappForm.valid) {
      const phone = this.whatsappForm.value.phoneNumber.replace(/\D/g, '');
      const message = encodeURIComponent(this.whatsappForm.value.message);
      const whatsappUrl = `https://wa.me/${"691264112"}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  }

}
