import { Component,inject } from '@angular/core';
import { TaskService } from '../../../core/services/task';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {

    protected count=0;
  private myIntervalles=0;


  ngOnInit() {
    this.myIntervalles= setInterval(()=>{
      if (document.hasFocus()){
        this.count++;
        console.log(this.count);
      }
    },500
    );
  
  }

  tasks$!: ReturnType<TaskService['getTask']>;

  constructor(private taskService:TaskService){
    this.tasks$ = this.taskService.getTask();
  }

  taskService2 = inject(TaskService);
  tasks2$=this.taskService2.tasks$;

  addTask(title:string){
    this.taskService2.addTask(title);
  }


  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
  }
}
