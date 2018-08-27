import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  name : string = 'mosogatás';
  state : string = '';

  constructor() { 
    this.state = Math.random() > 0.5 ? 'kész' : 'CSINÁLD';
  }

  ngOnInit() {
  }

  getStatusz() : string {
    return this.state;
  }

  getColor() {
    return this.state === 'kész' ? 'green' : 'red';
  }
}