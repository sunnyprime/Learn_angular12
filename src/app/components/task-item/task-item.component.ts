import { Component, OnInit,Input } from '@angular/core';
import { TaskService} from '../../services/task.service';
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
  // faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
   this.tasks =  this.taskService.getTask()
  }
  onClick():void{
    console.log('Clicked')
  }

}
