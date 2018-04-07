import { Component, Input } from '@angular/core';
import { Task } from 'app/task';

/* Компонент одной задачи */
@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html',
})
export class TaskComponent {

    constructor() { }

    @Input() task: Task;

    getStatus(): string {
        if (this.task.status == 1) return 'в ожидании';
        if (this.task.status == 2) return 'в работе';
        if (this.task.status == 3) return 'завершен';
    }

}
