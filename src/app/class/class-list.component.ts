import { Component } from '@angular/core';
import { ClassService } from './class-service';
import { Class } from './class';
import { IPaging } from '../model/paginate.model';


@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})

export class ClassListComponent {
  classes: Class[] = [];
  page: number = 1;
  total: number;
  pageSize: number;

  constructor(private classService: ClassService) {
    this.fetchData();
  }

  fetchData() {
    this.classService.get({ page: this.page, limit: this.pageSize }).subscribe((result: IPaging<Class>) => {
      this.total = result.totalCount;
      this.pageSize = result.pageSize;
      this.classes = result.items;
    });
  }

  onPageChange(event: number) {
    this.page = event;
    this.fetchData();
  }
}
