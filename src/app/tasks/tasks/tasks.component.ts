import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  allowAdd = false;
  taskCreationStatus = '';
  tasks = ['Krumplipucolás', 'Porszívózás'];

  constructor() {
  }

  onCreateTask() {
    this.taskCreationStatus = "done";
  }
 
}