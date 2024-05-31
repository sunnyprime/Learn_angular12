import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

import {Task} from '../../Task';
// import {TASKS} from '../../mock-task'
// import {faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  tasks: Task[] = [];
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter
  // faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
   
  }
  onDelete(task:any):void{
    // console.log(task)
    this.onDeleteTask.emit(task)
  }

  onToggle(task:any):void{
    // console.log(task)
    this.onToggleReminder.emit(task)
  }

}
