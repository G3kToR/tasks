import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task/task';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-task-page',
    template: `<app-task-form [task]="task"></app-task-form>`,
})
export class TaskPageComponent implements OnInit {

    public id: number;
    public task: Task;

    constructor(private activateRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activateRoute.data.subscribe(data => {
            this.task = data.task;
        });
    }

}
