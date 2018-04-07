import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../task';

/* Пайп сортирует список задач по дате/приоритету/статусу а также может изменять порядок */
@Pipe({
    name: 'sortTasks',
    pure: false,
})
export class SortTasksPipe implements PipeTransform {

    transform(array: Task[], type: number, reverse: boolean = false): Task[] {

        let result: Task[] = [];

        if (array.length == 0) return result;

        if (type == 1) { // Сортировка по дате

            result = array;
            result.sort((a, b) => {
                if (a.date > b.date) return 1;
                if (a.date < b.date) return -1;
            });
        }
        else { // Сортировка по статусу или приоритету

            const key: string = (type == 2) ? 'status' : 'priority';

            for (let i = 1; i < 4; i++) {
                result = result.concat(array.filter(item => {
                    return item[key] == i;
                }));
            }
        }

        return (reverse) ? result.reverse() : result; // Порядок
    }
}
