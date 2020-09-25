import { FormControl } from '@angular/forms';

export class ShValidator {
  static extension(validExtensions: string[]) {
    return (control: FormControl) => {
      const file = control.value;
      const fileName = file?.name || '';
      const fileExtension = fileName.split('.')[1];

      const message = `Por favor seleccionar un archivo con las siguientes extensiones: ${validExtensions.join(', ')}`;

      return validExtensions.includes(fileExtension) ? null : { extension: message };
    };
  }
}
