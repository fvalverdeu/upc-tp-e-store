import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value : 'assets/img-not-found.png';
  }

}
