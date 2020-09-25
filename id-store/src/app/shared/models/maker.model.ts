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
    this.name = data ? data.nombre : '';
    this.ruc = data ? data.ruc : '';
    this.state = data ? data.estado : true;
    this.dateCreate = data ? data.fechaRegistro : '';
    this.dateUpdate = data ? data.fechaModificacion : '';
  }
}
