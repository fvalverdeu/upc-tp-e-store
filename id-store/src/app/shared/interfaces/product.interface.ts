import { IMaker } from './maker.interface';

export interface IProduct {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  precio: number;
  cantidad: string;
  idFabricante: number;
  fabricante: IMaker;
  urlImg: string;
  state: boolean;
  dateCreate: string;
  dateUpdate: string;
}
