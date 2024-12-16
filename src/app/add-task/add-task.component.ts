import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface inputInterface{
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() userInput = new EventEmitter<inputInterface>();
  @Output() cancelTask = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  userInputs !: inputInterface;
  
  onSubmit(){
    this.userInputs = {title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate};
    this.userInput.emit(this.userInputs);
  }
  onCancelAddTask(){
    this.cancelTask.emit();
  }
}
