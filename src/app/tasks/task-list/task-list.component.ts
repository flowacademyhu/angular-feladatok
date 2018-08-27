import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Konyhafelújítás', 0, 'A konyha felújítása'),
    new Task('Ajtók cseréje', 10, 'Ajtócserék, surprise!'),
    new Task('Betonozás', 20, 'Az udvar ne füves legyen, hanem betonnal borított!')
  ];

  constructor() { }

  ngOnInit() {
  }

}
