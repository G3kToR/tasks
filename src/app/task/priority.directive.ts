import {Directive, ElementRef, Input, OnInit} from '@angular/core';

/* Аттрибутная директива изменяющая цвет задачи в зависимости от приоритета */
@Directive({
    selector: '[app-priority]',
})
export class PriorityDirective implements OnInit {

    @Input('app-priority') priority: string = '0';

    constructor(private elementRef: ElementRef) {
    }

    private getPriority(priority: string): string {
        if (priority == '3') return 'green';
        else if (priority == '2') return 'orange';
        else if (priority == '1') return 'red';
        else return '';
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.classList.add(this.getPriority(this.priority));
    }

}
