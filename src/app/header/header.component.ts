import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  activeItem: number = 1;

  constructor(private router: Router) { }

  onClick(value: number) {
    this.activeItem = value;

    if (value === 1)
      return this.router.navigateByUrl('/schools');

    return this.router.navigateByUrl('/classes');
  }
}