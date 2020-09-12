import { IMaker } from '../interfaces/maker.interface';

export class Maker {
  id: number;
  name: string;
  ruc: string;
  state: boolean;
  dateCreate: string;
  dateUpdate: string;

  constructor(data?: IMaker) {
    this.id = data ? data.id : 0;
    this.name = data ? data.name : '';
    this.ruc = data ? data.ruc : '';
    this.state = data ? data.state : true;
    this.dateCreate = data ? data.dateCreate : '';
    this.dateUpdate = data ? data.dateUpdate : '';
  }
}
