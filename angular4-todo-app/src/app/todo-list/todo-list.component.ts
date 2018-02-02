import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Todo-List',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() id: number;
  @Input() text: string;
  @Output() removeTodo = new EventEmitter<string>();
  @Output() toggleStatus = new EventEmitter<string>();
  
  isChecked:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeTodoItem(id) {
    console.log("Child :" + id);
    this.removeTodo.emit(id);
  }
}
