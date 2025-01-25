import { Component } from '@angular/core';

import { policies, contactItems } from '../../models/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear();
  public policies: policies[] = [
    {
      link: "/privacy-policy",
      label: "Políticas de privacidad"
    },
    {
      link: "/terms-and-conditions",
      label: "Términos y condiciones"
    },
    {
      link: "/cookies",
      label: "Política de cookies"
    }
  ];
  public contactItems: contactItems[] = [
    {
      label: "¿Dónde estamos?",
      icon: "pi-map-marker",
      link: "https://www.google.de/maps?q=Paseo+CONDE+SEPULVEDA,+24,+40006+Segovia"
    },
    {
      label: "¿Nos quieres contar algo?",
      icon: "pi-comments",
      link: "mailto:flordelotosegovia@gmail.com"
    },
    {
      label: "¡¡Llámanos!!",
      icon: "pi-phone",
      link: "tel:+34691264112"
    }
  ];

}
