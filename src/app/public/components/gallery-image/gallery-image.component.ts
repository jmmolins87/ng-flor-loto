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
  @Input()
  public altImg!: string;

  private autoSlideInterval!: any;

  public currentImageIndex: number = 0;
  public isPreviewOpen: boolean = false;
  public currentPreviewImage: string = '';

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    document.body.style.overflow = '';
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

  openPreview(image: string): void {
    this.isPreviewOpen = true;
    this.currentPreviewImage = image;
  }

  closePreview(): void {
    this.isPreviewOpen = false;
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/assets/img/logo-new-loto.jpg';
  }

  prevPreviewImage(): void {
    const currentIndex = this.images.indexOf(this.currentPreviewImage);
    const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    this.currentPreviewImage = this.images[prevIndex];
  }

  nextPreviewImage(): void {
    const currentIndex = this.images.indexOf(this.currentPreviewImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.currentPreviewImage = this.images[nextIndex];
  }

  selectPreviewImage(image: string): void {
    this.currentPreviewImage = image;
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

}
