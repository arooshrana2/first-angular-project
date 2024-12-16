import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task !: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  onCompleteTask() {
    console.log("Task completed: ", this.task.id);
    this.taskCompleted.emit(this.task.id);
  }
}
