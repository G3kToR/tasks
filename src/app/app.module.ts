import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { TasksModule } from './tasks/tasks.module';
import { UserService } from './shared/user.service';


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TasksModule
    ],
    providers: [ UserService ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
