import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent  {

  @Input() accept = '';
  value: File;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => { };

  get name(): string {
    return this.value ? this.value.name : 'Ningun archivo seleccionado';
  }
  updateFile(event): void {

    if (event.target.files.length) {
      // event.target.files[0];
      const [ file ] = event.target.files;
      this.onInput(file);
    }
  }

  onInput(value: File): void {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
   }

   writeValue(value: File): void {
    this.value = value;
   }

   registerOnChange(fn: any): void {
    this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
    this.onTouch = fn;
   }

   setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
   }


}
