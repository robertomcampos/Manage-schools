import { Component } from '@angular/core';
import { SchoolService } from './school-service';
import { School } from './school';
import { IPaging } from '../model/paginate.model';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})

export class SchoolListComponent {
  schools: School[] = [];
  page: number = 1;
  total: number;
  pageSize: number;

  constructor(private schoolService: SchoolService) {
    this.fetchData();
  }

  fetchData() {
    this.schoolService.get({ page: this.page, limit: this.pageSize }).subscribe((result: IPaging<School>) => {
      this.total = result.totalCount;
      this.pageSize = result.pageSize;
      this.schools = result.items;
    });
  }

  onPageChange(event: number) {
    this.page = event;
    this.fetchData();
  }
}
