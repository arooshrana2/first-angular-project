import { Injectable } from '@angular/core';
import { type inputInterface } from '../add-task/add-task.component';

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Task 1",
      summary: "Summary 1",
      dueDate: "2024-05-01"
    },
    {
      id: "t2",
      userId: "u1",
      title: "Task 2",
      summary: "Summary 2",
      dueDate: "2024-06-05"
    },
    {
      id: "t3",
      userId: "u2",
      title: "Task 1",
      summary: "Summary 1",
      dueDate: "2024-10-01"
    },
    {
      id: "t4",
      userId: "u3",
      title: "Task 1",
      summary: "Summary 1",
      dueDate: "2024-10-01"
    },
    {
      id: "t5",
      userId: "u5",
      title: "Task 1",
      summary: "Summary 1",
      dueDate: "2024-10-01"
    },
    {
      id: "t6",
      userId: "u6",
      title: "Task 1",
      summary: "Summary 1",
      dueDate: "2024-10-01"
    }

  ];

  getTasks(userId: string){
    return this.tasks.filter((task)=> task.userId === userId);
  }

  addTask(userInput: inputInterface, userId: string){
    this.tasks.unshift({
      id: "t" + (this.tasks.length + 1).toString(),
      userId: userId,
      title: userInput.title,
      summary: userInput.summary,
      dueDate: userInput.dueDate
    });
  }

  completeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}