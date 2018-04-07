import { Component } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html',
})
export class MainPageComponent {

    public taskFormDisplay: boolean = false; // Флаг для показа/скрытия формы добавления таска

    constructor() { }

}
