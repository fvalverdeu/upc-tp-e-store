import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../interfaces/menu-option.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuOptions: MenuOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
