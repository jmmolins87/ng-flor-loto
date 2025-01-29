

import { Component, OnInit } from '@angular/core';
import { RecomendationsHome } from '../../models/home/recomendations.interface';
import { OpinionsSection } from '../../models/home/opinions.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSkeleton: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 500)
  }

  // ********************* Data
  public titlePage: string = "El arte de las flores";
  public subtitlePage: string = "Las flores son nuestros mejores aliadas para sorprender, emocionar y transmitir emociones siempre con total atención aldetalle y su acabado."
  public textPresentatiin: string = "<h3 class='mb-0'>Nuestras especialidades</h3><br> Nuestros ramos y arreglos florales son únicos y a medida para cada cliente. Creamos composiciones versátiles, empezando por arreglos florares para bodas, incluyendo ramos de novia, arreglos de centro de mesa, coronas de flores para el cabello, boutonnieres, y más.<br> Además de bodas, también ofrecemos servicios de decoración para otros eventos, como fiestas de cumpleaños, aniversarios, celebraciones de empresa, entre otros eventos sociales.<br>Nuestras flores y plantas para el hogar son otra de nuestras especialidades, ofrecemos una selección de flores y plantas ya sea para decorar tanto el interior como el exterior.<br> También ofrecemos arreglos florares para funerales, incluyendo coronas funerarias y arreglos para celebración de vida. Si lo que quieres es sorprender a esa persona especial, te ofrecemos la entrega a domicilio, con el mejor mimo y cuidado.<br> Disponible los 365 días del año."
  public recommendationsTitleSection: string = "Te recomendamos";
  public recommendationsSection: RecomendationsHome[] = [
    {
      title: "Rosas preservadas",
      description: "Las flores preservadas presentadas en diferentes recipientes : cúpulas de cristal ,cajitas de madera ,teteras , etc… Si buscas un regalo duradero es una opción perfecta para que alguien muy especial se quede con un bonito recuerdo para siempre",
      img: ""
    },
    {
      title: "Ramo de flores",
      description: "¡Perfecto para regalar, sorprender, crear sensaciones inolvidables! Te ofrecemos ramos de temporada, clásicos, modernos, polivalentes en todos lo sentidos  la variedad de las flores .",
      img: ""
    },
    {
      title: "Ramos de novia",
      description: "¡El mejor elemento para destacar tu look nupcial ! Te ofrecemos un extenso catálogo de ramos de novia que ofrece desde ramos de novia más clásicos hasta ramos de novia vintage con un aire retro",
      img: ""
    }
  ]
  public opinionsTitleSection: string = "Las opiniones de nuestros clientes";
  public opinionsSection: OpinionsSection[] = [
    {
      name: "Alberto Acebes",
      description: "¡Raúl es un gran florista! Siempre está dispuesto a ayudar, dando buenos consejos sobre cómo cuidar de las plantas. Siempre que tengo dudas, las resuelve rápidamente y me ayuda a que mis plantas se mantengan sanas. Además, tiene algunas especies de lo más originales, como la que se puede ver en la foto, que quedan genial en casa y son fáciles de cuidar. ¡Totalmente recomendable!"
    },
    {
      name: "Eliza Obre",
      description: "Me ha encantado la atención y el ramo de flores que me hicieron. Recomiendo mucho esta Floristería Flor de Loto. De verdad sacara una sonrisa de sus caras al tener el ramo en sus manos."
    },
    {
      name: "Odette Lander",
      description: "No es una simple floristería, es un negocio que está gestionado por una artista totalmente artesanal. Su trabajo es es espectacular y no tiene precio. Se adapta a todas las peticiones personalizadas; he visto con mis propios ojos realizar una diadema de flores frescas impresionante, me quede sin palabras. Si queréis algo exclusivo, auténtico y espectacular debéis ver su trabajo y tienen un trato agradable, cercano y su calidad precio es único. Os lo recomiendo."
    },
    {
      name: "Sergio Enriquez",
      description: "Pues yo he encargado ya muchos ramos para regalos y siempre muy bien, por cambiar esta vez compré una urna de cristal con un Bonsai que son preciosos, y por lo que sea a las semanas se me murió… se lo dije y sin poner ningún problema me dijo que se lo llevara y me ha echo otro nuevo, sin cargo ninguno!! <br/>Tienen un trato genial hacia el cliente, volveré y la recomiendo para todo el mundo.",
      image: ["assets/img/opinions/sergio-enriquez.jpg"],
      rating: 5
    },
    {
      name: "Lu RqV",
      description: "Da gusto con gente tan profesional como Rafaela.. todo perfecto! <br/>Con mucho detalle y gusto! <br/>Se nota cuando alguién disfruta con su trabajo! <br/>Gracias! <br/>Volveré sin duda",
      image: ["assets/img/opinions/lu-rqv.jpg"],
      rating: 5
    },
    {
      name: "Gloria",
      description: "Hoy es la primera vez que he ido y seguro que no la última! Rafaela (me quedé con su nombre) me ha preparado con mucho mimo un precioso ramo de claveles multicolor. <br/>Ha sido además muy atenta y paciente porque no me decidía por unas flores u otras y quería ceñirme a un presupuesto :). <br/>Gracias Rafaela! A mi amiga le ha encantado su ramo!",
      image: ["assets/img/opinions/gloria.jpg"],
      rating: 5
    },
    {
      name: "Cielo mr (Quispe)",
      description: "He ido varias veces y he sido atendida tanto por Rafaela como por el dueño, en todos los casos un trato estupendo, muy amables, siempre con una sonrisa y unos ramos preciosos! <br/>Totalmente recomendable!!",
      image: ["assets/img/opinions/quispe.jpg"],
      rating: 5
    },
    {
      name: "Angelica Muñoz Pascual",
      description: "Encargué un regalo para agradecer a una compañera. <br>El trato desde el primer momento fue exquisito, con una atención y dedicación incomparables. <br>Nunca he recibido tanta amabilidad de una persona en ninguna de los establecimientos a los que acudo. El regalo quedó precioso. Son unos profesionales impresionantes. <br>Muchas gracias por todo",
      rating: 5
    },
    {
      name: "beatriz cruz",
      description: "He contactado con esta floristeria desde Madrid para mandar una orquídea a un familiar hospitalizado en Segovia. <br>Me ha atendido Rafaela y me ha dado todas las facilidades posibles. <br>Muchas gracias por su eficacia. <br>He quedado encantada.",
      rating: 5
    },
    {
      name: "Estefany Rodriguez Garcia",
      description: "Me han atendido súper bien, Rafaela a hecho un trabajo súper bonito con el regalo de mi madre muchas gracias",
      image: ["assets/img/opinions/estefany1.jpg", "assets/img/opinions/estefany2.jpg"],
      rating: 5
    },
    {
      name: "Bianca B",
      description: "Muy buena atención por parte de Rafaela en todo momento. <br>El papel del ramo no me gustó, y sin problema me lo cambio por otro. <br>Recomiendo.",
      image: ["assets/img/opinions/bianca_b.jpg"],
      rating: 5
    }
  ] 

}