

import { Component, OnInit } from '@angular/core';

import { carrouselOptions } from '../../components/carrousel/carrousel.config';

import { SharedService } from '../../shared/services/shared.service';
import { PagesService } from '../../services/pages.service';

import { carrouselHero } from '../../models/home/carrouselHero.interface';
import { carrouselOpinions } from '../../models/home/carrouselOpinions.interface';
import { recomendationsHome } from '../../models/home/recomendations.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSkeleton: boolean = true;
  public carrouselHero: carrouselOptions = carrouselOptions.isHero;
  public carrouselOpinator: carrouselOptions = carrouselOptions.isOpinator;
  public intervalCarrouselHero: number = 7500;
  public intervalCarrouselOpinions: number = 5000;
  public recommendations: recomendationsHome[] = []

  constructor( 
      private _sharedService: SharedService, 
      private _pagesService: PagesService 
    ) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500)
  }

  getRecommendations() {
    this._pagesService.recommendations.subscribe(recommendations => {
      this.recommendations = recommendations;
    });
    return this.recommendations;  
  }

  // ********************* Data *********************
  public itemsCarrouselHero: carrouselHero[] = [
    {
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 1",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    },
    {
      title: "Slide 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 2",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    },
    {
      title: "Slide 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 3",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    }
    , {
      title: "Slide 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 4",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    }
  ];
  // public titlePage: string = "El arte de las flores";
  // public subtitlePage: string = "Las flores son nuestros mejores aliadas para sorprender, emocionar y transmitir emociones siempre con total atención aldetalle y su acabado."
  // public textPresentation: string = "<h3 class='mb-0'>Nuestras especialidades</h3><br> Nuestros ramos y arreglos florales son únicos y a medida para cada cliente. Creamos composiciones versátiles, empezando por arreglos florares para bodas, incluyendo ramos de novia, arreglos de centro de mesa, coronas de flores para el cabello, boutonnieres, y más.<br> Además de bodas, también ofrecemos servicios de decoración para otros eventos, como fiestas de cumpleaños, aniversarios, celebraciones de empresa, entre otros eventos sociales.<br>Nuestras flores y plantas para el hogar son otra de nuestras especialidades, ofrecemos una selección de flores y plantas ya sea para decorar tanto el interior como el exterior.<br> También ofrecemos arreglos florares para funerales, incluyendo coronas funerarias y arreglos para celebración de vida. Si lo que quieres es sorprender a esa persona especial, te ofrecemos la entrega a domicilio, con el mejor mimo y cuidado.<br> Disponible los 365 días del año."
  // public recommendationsTitleSection: string = "Te recomendamos";
  public recommendationsSection: recomendationsHome[] = [
    {
      title: "Rosas preservadas",
      description: "Las flores preservadas son la opción perfecta para quienes buscan un regalo duradero y lleno de encanto. Presentadas en elegantes recipientes como cúpulas de cristal, cajitas de madera y teteras, nuestras rosas preservadas mantienen su belleza y frescura durante años sin necesidad de cuidados especiales. Sorprende a alguien especial con un recuerdo que perdurará en el tiempo.",
      img: "assets/img/recommends/preserved-flowers.png"
    },
    {
      title: "Ramo de flores",
      description: "¡Perfecto para regalar, sorprender y crear sensaciones inolvidables! Nuestros ramos de flores están diseñados para cada ocasión, desde ramos de temporada llenos de color hasta composiciones clásicas y modernas. Cada ramo es elaborado con flores frescas y de la mejor calidad, asegurando que tu regalo sea siempre especial. ¡Haz que cada momento sea memorable con un hermoso ramo de flores!",
      img: "assets/img/recommends/bunch-flowers.png"
    },
    {
      title: "Flores para bodas",
      description: "¡Haz que tu día especial sea aún más memorable con nuestras flores para bodas! Ofrecemos una amplia gama de arreglos florales personalizados para cada aspecto de tu boda, desde ramos de novia y boutonnieres hasta decoraciones de mesa y arcos florales. Nuestros expertos floristas trabajarán contigo para crear composiciones únicas que reflejen tu estilo y tema de boda. ¡Entrega y montaje disponibles para asegurar que todo sea perfecto en tu gran día!",
      img: "assets/img/recommends/wedding.png"
    },
    {
      title: "Flores para cumpleaños",
      description: "¡Haz que el cumpleaños de esa persona especial sea inolvidable con nuestras flores frescas y vibrantes! Ofrecemos una amplia variedad de arreglos florales diseñados para sorprender y alegrar el día. Desde ramos coloridos y alegres hasta elegantes composiciones, tenemos la opción perfecta para cada celebración. ¡Entrega a domicilio disponible para que tu regalo llegue justo a tiempo!",
      img: "assets/img/recommends/birthday.jpg"
    }
  ]
  public opinionsTitleSection: string = "Las opiniones de nuestr@s clientes";
  public opinionsSection: carrouselOpinions[] = [
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