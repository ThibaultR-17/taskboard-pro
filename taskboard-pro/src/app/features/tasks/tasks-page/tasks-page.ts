import { Component,inject,ViewChild,ViewContainerRef} from '@angular/core';
import { TaskService,TaskItem } from '../../../core/services/task';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskEdit } from '../task-edit/task-edit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe,FormsModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('editContainer', {read : ViewContainerRef})
  editContainer!:ViewContainerRef


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

  terminer(id:number){
    this.taskService2.terminateTask(id);
  }

  highlight(task: TaskItem) {
    this.container.clear();
    
    const ref = this.container.createComponent(TaskHighlight);
  
    ref.instance.title = task.title;
  }

  editer(task : TaskItem){
    this.editContainer.clear()

    const ref = this.container.createComponent(TaskEdit);

  }


  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
    this.container.clear();
  }







}