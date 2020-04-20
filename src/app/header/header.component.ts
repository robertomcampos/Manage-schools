import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../class/class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  activeItem: number = 1;
  SCHOOLS = 1;
  CLASSES = 2;

  constructor(private router: Router) { }

  onClick(value: number) {
    this.activeItem = value;

    switch (value) {
      case this.SCHOOLS:
        return this.router.navigateByUrl('/schools');
      case this.CLASSES:
        return this.router.navigateByUrl('/classes');
      default:
        return this.router.navigateByUrl('/schools');
    }
  }
}