import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {TaskService} from '../task.service';
import {Task} from 'app/task';
import {Router} from '@angular/router';

@Component({
    selector: 'app-task-form',
    templateUrl: 'task-form.component.html',
    styles: [`
        .task-form {
            width: 80%;
            margin: 30px auto 50px auto;
        }
    `],
})
export class TaskFormComponent implements OnInit {

    @Input() task: Task;
    @Output() onSubmitTask = new EventEmitter<boolean>();
    public fullMode = false;
    public taskForm: FormGroup;

    constructor(private taskService: TaskService, private router: Router) { }

    public submitTask(): void { // Отправляет таск в сервис

        // Переводит планируемое время из минут в часы и минуты
        const plannedTime: number = Number(
            this.taskForm.value.taskPlannedTime[0]) * 60 +
            Number(this.taskForm.value.taskPlannedTime[1]);

        // Переводит затраченное время из минут в часы и минуты
        const elapsedTime: number = Number(
            this.taskForm.value.taskElapsedTime[0]) * 60 +
            Number(this.taskForm.value.taskElapsedTime[1]);

        if (this.fullMode) { // Если это полная версия задачи

            this.taskService.editTask(
                this.task.id,
                plannedTime,
                elapsedTime,
                this.taskForm.value.taskStatus
            );

            this.router.navigate(['']);

        } else { // Если это добавление задачи

            this.taskService.addData(
                this.taskForm.value.taskName,
                this.taskForm.value.taskDesk,
                Number(this.taskForm.value.taskPriority),
                plannedTime,
                elapsedTime,
                Number(this.taskForm.value.taskStatus)
            );

            this.taskForm.reset({  // Сбрасываем форму
                'taskStatus': '1',
                'taskPriority': '3',
            });

            this.onSubmitTask.emit();
        }

    }

    ngOnInit(): void {

        let plannedTime: number[] = [0, 0];
        let elapsedTime: number[] = [0, 0];

        if (this.task === undefined || this.task === null) {
            this.task = new Task('', '', 0, 3, 0, 0, 1);
        } else {
            this.fullMode = true;
            plannedTime = [
                Math.floor(this.task.plannedTime / 60),
                this.task.plannedTime - Math.floor(this.task.plannedTime / 60) * 60,
            ];
            elapsedTime = [
                Math.floor(this.task.elapsedTime / 60),
                this.task.elapsedTime - Math.floor(this.task.elapsedTime / 60) * 60,
            ];
        }

        this.taskForm = new FormGroup({ // Форма задачи

            'taskName': new FormControl(
                {value: this.task.name, disabled: this.fullMode},
                [Validators.required]
            ),
            'taskDesk': new FormControl(
                {value: this.task.desk, disabled: this.fullMode},
                [Validators.required]
            ),
            'taskPlannedTime': new FormArray([
                new FormControl(plannedTime[0], Validators.pattern('[0-9]{0,3}')),
                new FormControl(plannedTime[1], Validators.pattern('[0-9]{0,3}')),
            ]),
            'taskElapsedTime': new FormArray([
                new FormControl(elapsedTime[0], Validators.pattern('[0-9]{0,3}')),
                new FormControl(elapsedTime[1], Validators.pattern('[0-9]{0,3}')),
            ]),
            'taskStatus': new FormControl(this.task.status.toString()),
            'taskPriority': new FormControl(
                {value: this.task.priority.toString(), disabled: this.fullMode}
            ),

        });
    }
}
