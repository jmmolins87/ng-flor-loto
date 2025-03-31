import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';


@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit, OnDestroy {

  @Input()
  public images: string[] = [];

  public currentImageIndex: number = 0;
  private autoSlideInterval!: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.restartAutoSlide();
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.restartAutoSlide();
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
    this.restartAutoSlide();
  }

  getTransformStyle(): string {
    return `translateX(-${this.currentImageIndex * 100}%)`;
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia de imagen cada 5 segundos
  }

  private stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/assets/img/logo-new-loto.jpg';
  }
}
