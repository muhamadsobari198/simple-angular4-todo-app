import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Todo-Header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  title: string;
  constructor() { }

  ngOnInit() {
    this.title = "Angular To-Do App";
  }
}
