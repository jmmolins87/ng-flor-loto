import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public textPresentatiin: string = "<h3>Nuestras especialidades</h3><br> Nuestros ramos y arreglos florales son únicos y a medida para cada cliente. Creamos composiciones versátiles, empezando por arreglos florares para bodas, incluyendo ramos de novia, arreglos de centro de mesa, coronas de flores para el cabello, boutonnieres, y más.<br> Además de bodas, también ofrecemos servicios de decoración para otros eventos, como fiestas de cumpleaños, aniversarios, celebraciones de empresa, entre otros eventos sociales.<br>Nuestras flores y plantas para el hogar son otra de nuestras especialidades, ofrecemos una selección de flores y plantas ya sea para decorar tanto el interior como el exterior.<br> También ofrecemos arreglos florares para funerales, incluyendo coronas funerarias y arreglos para celebración de vida. Si lo que quieres es sorprender a esa persona especial, te ofrecemos la entrega a domicilio, con el mejor mimo y cuidado.<br> Disponible los 365 días del año."

}