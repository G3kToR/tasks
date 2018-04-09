import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TaskPageComponent} from './task-page/task-page.component';
import {TaskResolver} from './task/task.resolver';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {TaskComponent} from './task/task.component';
import {PriorityDirective} from './task/priority.directive';
import {TasksService} from './tasks.service';
import {SortTasksPipe} from './task-list/sort-tasks.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from '../auth/auth.guard';


const taskRoutes: Routes = [
    { path: '', component: TaskComponent },
    { path: 'task/:id', component: TaskPageComponent, canActivate: [AuthGuard],
        resolve: {
            task: TaskResolver
        }},
    { path: '**', redirectTo: '/' },

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forChild(taskRoutes),
    ],
    declarations: [
        TasksComponent,
        TaskPageComponent,
        TaskListComponent,
        TaskFormComponent,
        TaskComponent,
        PriorityDirective,
        SortTasksPipe
    ],
    exports: [
        TaskPageComponent,
    ],
    providers: [
        TasksService
    ]
})
export class TasksModule {
}
