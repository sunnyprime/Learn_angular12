import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';
import {Task} from '../../Task';
import { Observable,of } from 'rxjs';
// import {TASKS} from '../../mock-task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; 
  // private apiUrl = 'http://localhost:5000/tasks'

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() =>(this.tasks.filter((t)=>t.id! === task.id)))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
    console.log(task.reminder)
  }
  

}
