import { IProduct } from '../interfaces/product.interface';
import { Maker } from './maker.model';

export class Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  quantity: string;
  idMaker: number;
  fabricante: Maker;
  urlImg: string;
  state: boolean;
  dateCreate: string;
  dateUpdate: string;

  constructor(data?: IProduct) {
    this.id = data ? data.id : 0;
    this.name = data ? data.nombre : '';
    this.code = data ? data.codigo : '';
    this.description = data ? data.descripcion : '';
    this.price = data ? data.precio : 0;
    this.quantity = data ? data.cantidad : '';
    this.idMaker = data ? data.idFabricante : 0;
    this.fabricante = data ? new Maker(data.fabricante) : new Maker();
    this.urlImg = data ? data.urlImg : '';
    this.state = data ? data.state : true;
    this.dateCreate = data ? data.dateCreate : '';
    this.dateUpdate = data ? data.dateUpdate : '';
  }
}
