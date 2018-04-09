import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskService } from './task.service';
import { PriorityDirective } from './task/priority.directive';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortTasksPipe } from './tasks-list/sort-tasks.pipe';
import { MainPageComponent } from './pages/main-page.component';
import { TaskPageComponent } from './pages/task-page.component';
import { AuthComponent } from './auth/auth.component';
import { UserService } from './user.service';


@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        TasksListComponent,
        PriorityDirective,
        TaskFormComponent,
        MainPageComponent,
        TaskPageComponent,
        AuthComponent,
        SortTasksPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [ TaskService, UserService ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
