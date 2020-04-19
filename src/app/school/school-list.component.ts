import { Component } from '@angular/core';
import { SchoolService } from './school-service';
import { School } from './school';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})

export class SchoolListComponent {
  schools: School[];

  constructor(schoolService: SchoolService) {

    schoolService.get().subscribe((result) => {
      this.schools = result;
    });
    
  }
}
