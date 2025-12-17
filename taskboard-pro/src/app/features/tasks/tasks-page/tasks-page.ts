import { Component,inject,ViewChild,ViewContainerRef} from '@angular/core';
import { TaskService, TaskItem } from '../../../core/services/task';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
      @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

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

  supprimerTask(id:number){
    this.taskService2.deleteTask(id);
  }


  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
  }



  highlight(task: TaskItem) {
    this.container.clear();
    
    const ref = this.container.createComponent(TaskHighlight);
  
    ref.instance.title = task.title;
  }
}
