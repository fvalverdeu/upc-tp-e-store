import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShValidator } from '../../../../../../shared/validators/validators';

@Component({
  selector: 'app-product-update-img',
  templateUrl: './product-update-img.component.html',
  styleUrls: ['./product-update-img.component.scss']
})
export class ProductUpdateImgComponent {

  @Output() upload: EventEmitter<File> = new EventEmitter<File>();
  @Input() imgProduct = '';
  fileControl: FormControl;

  constructor() {
    this.fileControl = new FormControl(null, [ Validators.required, ShValidator.extension(['png', 'jpg'])  ]);
    this.fileControl.valueChanges.subscribe(res => console.log(res) );
  }

  send(): void {
    if (this.fileControl.valid) { this.upload.emit(this.fileControl.value); }
  }

  onChange(): void {
    // console.log(this.file);
  }

}
