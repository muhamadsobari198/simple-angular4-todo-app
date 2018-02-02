import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Todo-Input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  inputItem: string = "";
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addTodoItem() {
    console.log("Child :" + this.inputItem);
    this.addTodo.emit(this.inputItem);
    this.inputItem = "";
  }
}
