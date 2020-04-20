import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolService } from '../school/school-service';
import { School } from '../school/school';
import { ClassService } from '../class/class-service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-class-create',
    templateUrl: './class-create.component.html',
    styleUrls: ['./class-create.component.css']
})

export class ClassCreateComponent {
    schools: School[];

    constructor(
        private schoolService: SchoolService,
        private classService: ClassService,
        private notificationService: NotificationService,
        private router: Router
    ) {
        this.schoolService.getAll().subscribe((result) => {
            this.schools = result;
        });
    }

    classForm = new FormGroup({
        schoolId: new FormControl(''),
        name: new FormControl(''),
    });

    onSubmit() {
        const { name, schoolId } = this.classForm.value;

        this.classService.create({ name, schoolId }).subscribe((result) => {
            this.notificationService.showSuccess(`A Turma "${result.name}" foi criada com sucesso.`);
            this.router.navigateByUrl('/classes');
        });
    }
}
