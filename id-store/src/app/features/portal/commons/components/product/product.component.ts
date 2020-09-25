import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;
  description: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.description = `${this.product.descripcion.substring(0, 150)}...`;
  }

  save(): void {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = [...cart, this.product];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  detail(): void {
    this.router.navigateByUrl('portal/detail');
  }

}
