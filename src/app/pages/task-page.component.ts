import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';
import {Task} from '../task';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-main-page',
    template: `<app-task-form [task]="task"></app-task-form>`,
})
export class TaskPageComponent implements OnInit {

    public id: number;
    public task: Task;

    constructor(private activateRoute: ActivatedRoute, private taskService: TaskService) {
        this.id = activateRoute.snapshot.params['id']; // получаем ид задачи из url
    }

    ngOnInit() {
        this.task = this.taskService.getTask(this.id); // Получаем инфу о задаче по ид
    }

}
