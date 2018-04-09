import {Directive, ElementRef, Input, OnInit} from '@angular/core';

/* Аттрибутная директива изменяющая цвет задачи в зависимости от приоритета */
@Directive({
    selector: '[app-priority]',
})
export class PriorityDirective implements OnInit {

    @Input('app-priority') priority = 0;

    constructor(private elementRef: ElementRef) { }


    private getPriority(priority: number): string {
        switch (priority) {
            case 1:
                return 'red';
            case 2:
                return 'orange';
            case 3:
                return 'green';
            default:
                return '';
        }
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.classList.add(this.getPriority(this.priority));
    }

}
