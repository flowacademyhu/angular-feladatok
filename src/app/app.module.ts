import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AttrDirective } from './shared/attr.directive';
import { GoodAttrDirective } from './shared/good-attr.directive';
import { LoggerService } from './shared/logger.service';
import { TaskService } from './tasks/task.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TasksComponent,
    TaskListComponent,
    AttrDirective,
    GoodAttrDirective,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggerService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
