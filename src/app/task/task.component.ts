import { Component, Input } from '@angular/core';
import { Task } from 'app/task';

/* Компонент одной задачи */
@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html',
})
export class TaskComponent {

    @Input() task: Task;

    constructor() { }

    getStatus(): string {
        switch (this.task.status) {
            case 1:
                return 'в ожидании';
            case 2:
                return 'в работе';
            case 3:
                return 'завершен';
        }
    }

}
