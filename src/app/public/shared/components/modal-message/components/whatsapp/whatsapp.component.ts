import { 
  Component, 
  OnInit, 
  AfterViewInit 
} from '@angular/core';
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
export class WhatsappComponent implements OnInit, AfterViewInit {

  public whatsappForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.whatsappForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.minLength(9)]
      ],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngAfterViewInit(): void {
    // Remove focus from any element
    setTimeout(() => {
      (document.activeElement as HTMLElement).blur();
    }, 0);
  }

  onMessageInput(): void {
    const messageControl = this.whatsappForm.get('message');
    if (messageControl?.touched) {
      messageControl.updateValueAndValidity();
    }
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
