import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/take';
import {TasksService} from '../tasks.service';
import {Task} from 'app/tasks/task/task';

@Component({
    selector: 'app-task-list',
    templateUrl: 'task-list.component.html',
})
export class TaskListComponent implements OnInit {

    public sortType = 1; // Признак сортировки (1 - дата, 2 - статус, 3 - приоритет)
    public sortReverse = false; // Порядок сортировки
    public connectErr = false; // Показывает сообщение об ошибки сети
    public preload = true; // Показвает прелоадер

    public tasks: Task[] = [];

    constructor(private taskService: TasksService) { }

    ngOnInit(): void {
        this.taskService.getDataHttp()
            .take(1)
            .subscribe(
                () => { this.tasks = this.taskService.getData(); this.preload = false; },
                () => this.connectErr = true
            );
    }

}
