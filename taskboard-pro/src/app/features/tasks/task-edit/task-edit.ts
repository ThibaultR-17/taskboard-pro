import { Component } from '@angular/core';
import { TaskItem } from '../../../core/services/task';

@Component({
  selector: 'app-task-edit',
  imports: [],
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.css',
})
export class TaskEdit {

  editTaskTitle(task:TaskItem,nouveauNom:string){
    task.title=nouveauNom;
  }


}
