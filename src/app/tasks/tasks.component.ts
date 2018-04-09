import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tasks',
    templateUrl: 'tasks.component.html',
})
export class TasksComponent {

    public taskFormDisplay = false; // Флаг для показа/скрытия формы добавления таска

    constructor() { }

}
