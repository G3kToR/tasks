import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { TaskResolver } from './tasks/task/task.resolver';
import { TasksComponent } from './tasks/tasks.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
    { path: '', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'auth', component: AuthComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [TaskResolver, AuthGuard],
})
export class AppRoutingModule { }
