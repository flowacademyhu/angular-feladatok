import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
