import {Component} from '@angular/core';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoInputComponent} from './todo-input/todo-input.component';
import {TodoListComponent} from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  todos = [];
  nextId = 3;

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        text: "Meeting at 11am"
      }, {
        id: 2,
        text: "Car Wash today"
      }
    ]
  }

  addTodoItem(todoItem) {
    console.log("Parent :" + todoItem);
    this
      .todos
      .push({
        id: this.nextId++,
        text: todoItem
      });
  }

  removeTodoItem(id) {
    console.log("Parent :" + id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
