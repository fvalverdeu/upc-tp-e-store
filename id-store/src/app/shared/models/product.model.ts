import { IProduct } from '../interfaces/product.interface';

export class Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  quantity: string;
  idMaker: number;
  urlImg: string;
  state: boolean;
  dateCreate: string;
  dateUpdate: string;

  constructor(data?: IProduct) {
    this.id = data ? data.id : 0;
    this.name = data ? data.name : '';
    this.code = data ? data.code : '';
    this.description = data ? data.description : '';
    this.price = data ? data.price : 0;
    this.quantity = data ? data.quantity : '';
    this.idMaker = data ? data.idMaker : 0;
    this.urlImg = data ? data.urlImg : '';
    this.state = data ? data.state : true;
    this.dateCreate = data ? data.dateCreate : '';
    this.dateUpdate = data ? data.dateUpdate : '';
  }
}
