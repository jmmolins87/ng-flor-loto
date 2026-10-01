


import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'appDefaultImage',
  standalone: false,
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string, defaultImageUrl: string = '/assets/img/no-image.jpg'): string {
    return imageUrl || defaultImageUrl;
  }
}
