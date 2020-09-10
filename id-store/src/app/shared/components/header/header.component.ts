import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(private router: Router) { this.isLogin = false; }

  ngOnInit(): void {
    const login = sessionStorage.getItem('true');
    if (login === 'true') {
      this.isLogin = true;
    }
  }

  login(): void {
    this.router.navigateByUrl('auth');
  }

}
