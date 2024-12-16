import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../tasks/tasks.service';
import { AddTaskComponent, inputInterface } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name !: string;
  @Input({required: true}) userId !: string;

  addingTask : boolean = false;
  /*
  // Below 3 lines can be replaced with the constructor code
  private tasksService : TasksService;
  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }
  */
  constructor(private tasksService: TasksService){}
  /*
  Above statement lets angular know that it's a singleton value
  but we also need to inject the class to let angular know
  */

  get tasksForUser() {
    return this.tasksService.getTasks(this.userId);
  }

  onTaskCompleted(id: string){
    return this.tasksService.completeTask(id);
  }

  onAddTask(){
    this.addingTask = true;
  }

  onAddTaskInput(userInput: inputInterface){
    this.tasksService.addTask(userInput, this.userId)
    this.addingTask = false;
  }

  onCancelAddTask(){
    this.addingTask = false;
  }
}
