import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../../../../shared/models/product.model';
import { Maker } from '../../../../../../shared/models/maker.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Output() save: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() makers: Maker[] = [];
  @Input() product: Product;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      code: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      idMaker: ['', Validators.required],
    });

    this.makers = [
      { id: 1, name: 'Fabricante 01', ruc: '1114445550', state: true, dateCreate: '', dateUpdate: '' },
      { id: 2, name: 'Fabricante 02', ruc: '2224445550', state: true, dateCreate: '', dateUpdate: '' },
      { id: 3, name: 'Fabricante 03', ruc: '3334445550', state: true, dateCreate: '', dateUpdate: '' },
      { id: 4, name: 'Fabricante 04', ruc: '4444445550', state: true, dateCreate: '', dateUpdate: '' }
    ];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.product?.currentValue) {
      this.updateValues();
    }
  }

  updateValues(): void {
    this.form.patchValue({
      id: this.product.id,
      name: this.product.name,
      code: this.product.code,
      description: this.product.description,
      price: this.product.price,
      stock: this.product.quantity,
      idMaker: this.product.idMaker,
    });
  }

  send(): void {
    if (this.form.invalid) { return; }
    this.save.emit(this.form.value);
  }


}
