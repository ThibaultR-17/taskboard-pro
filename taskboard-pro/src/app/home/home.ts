import { Component } from '@angular/core';
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
  myIntervalles=0;
  ngOnInit() {
    this.myIntervalles= setInterval(()=>{
      this.count++;
      console.log(this.count);
    },500
    );
  
  }

  tasks$!: ReturnType<TaskService['getTask']>;

  constructor(private taskService:TaskService){
    this.tasks$ = this.taskService.getTask();
  }

  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
  }
}
