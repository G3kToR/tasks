import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient, private userService: UserService) { }

    private data: Task[];

    public getDataHttp(): Observable<boolean> {

        if (this.data === undefined)
            return this.http.get('assets/data.json').map(data => {
                if (data[this.userService.getUserId()] === undefined)
                    this.data = [];
                else
                    this.data = data[this.userService.getUserId()].map(task => {
                        return new Task(
                            task.name,
                            task.desk,
                            task.date,
                            task.priority,
                            task.plannedTime,
                            task.elapsedTime,
                            task.status,
                            task.id
                        );
                    });
                return true;
            });
        else return Observable.of(false);

    }

    public getData(): Task[] {
        return this.data;
    }

    public getTask(id: number): Task { // Возвращает таску по ид  Observable<Task>
        const result: Task = this.findTask(id);
        //if (result === null) {// запрос к серверу
        return result;
    }

    public editTask(
        id: number,
        plannedTime: number = 0,
        elapsedTime: number = 0,
        status: number
    ): void
    {
        const result: Task = this.findTask(id);
        //if (result === null)
        result.plannedTime = plannedTime;
        result.elapsedTime = elapsedTime;
        result.status = status;
        // Отправляем таск на сервер
    }

    private findTask(id: number): Task {
        if (this.data === undefined) return null;
        let result: Task;
        for (let i = 0; i != this.data.length; i++) {
            if (this.data[i].id == id) {
                result = this.data[i];
                break;
            }
        }
        //this.data.map(item => { if (item.id == id) result = item; }); // или так
        return (result === undefined) ? null : result;
    }

    public addData( // Добавляет такс
        name: string,
        desk: string,
        priority: number = 1,
        plannedTime: number = 0,
        elapsedTime: number = 0,
        status: number = 1
    ): void
    {
        this.data.push(
            new Task(
                name,
                desk,
                Date.now(),
                priority,
                plannedTime,
                elapsedTime,
                status,
                this.data.length + 1
            )
        );
        // Отправляем таск на сервер
    }
}
