import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';


@Injectable()
export class TaskResolver implements Resolve<Task> {

    constructor(private taskService: TaskService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.taskService.getTask(Number(route.params.id));
    }
}

