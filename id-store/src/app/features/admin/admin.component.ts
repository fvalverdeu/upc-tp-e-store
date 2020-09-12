import { Component, OnInit } from '@angular/core';
import { MenuOption } from './commons/interfaces/menu-option.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuOptions: MenuOption[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuOptions = [
      { icon: 'folder', title: 'Catálogos', url: '/admin/dashboard'},
      { icon: 'folder', title: 'Productos', url: '/admin/products'},
      { icon: 'folder', title: 'Clientes', url: ''},
      { icon: 'folder', title: 'Usuarios', url: ''},
    ];
  }

}
