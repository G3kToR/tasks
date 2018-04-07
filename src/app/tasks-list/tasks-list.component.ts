import {Component, OnInit} from '@angular/core';
import {Task} from 'app/task';
import {TaskService} from '../task.service';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-tasks-list',
    templateUrl: 'tasks-list.component.html',
    styles: [],
})
export class TasksListComponent implements OnInit {

    public sortType: number = 1; // Признак сортировки (1 - дата, 2 - статус, 3 - приоритет)
    public sortReverse: boolean = false; // Порядок сортировки
    public connectErr: boolean = false; // Показывает сообщение об ошибки сети
    public preload: boolean = true; // Показвает прелоадер

    public tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getDataHttp()
            .take(1)
            .subscribe(
                () => { this.tasks = this.taskService.getData(); this.preload = false; },
                () => this.connectErr = true
            );
    }

}
