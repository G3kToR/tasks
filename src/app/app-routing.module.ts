import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page.component';
import { TaskPageComponent } from './pages/task-page.component';
import { TaskResolver } from './task/task.resolver';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';


const appRoutes: Routes = [
    { path: '', component: MainPageComponent, canActivate: [AuthGuard] },
    { path: 'task/:id', component: TaskPageComponent, canActivate: [AuthGuard],
        resolve: {
            task: TaskResolver
        }},
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '/' },

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [TaskResolver, AuthGuard],
})
export class AppRoutingModule { }
