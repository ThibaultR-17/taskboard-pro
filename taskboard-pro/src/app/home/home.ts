import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../core/service/task';


@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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
