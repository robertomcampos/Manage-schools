import { Component } from '@angular/core';
import { ClassService } from './class-service';
import { Class } from './class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})

export class ClassListComponent {
  classes: Class[];

  constructor(classService: ClassService) {

    classService.get().subscribe((result) => {
      this.classes = result;
    });
  }
}
