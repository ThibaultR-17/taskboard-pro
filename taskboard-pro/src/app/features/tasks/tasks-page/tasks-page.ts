import { Component,inject,ViewChild,ViewContainerRef} from '@angular/core';
import { TaskService, TaskItem } from '../../../core/services/task';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskEdit } from '../task-edit/task-edit';


@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
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

  tasks$!: ReturnType<TaskService['getTaskObservableDelayed']>;

  constructor(private taskService:TaskService){
    this.tasks$ = this.taskService.getTaskObservableDelayed();
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
    this.taskService2.toggleTask(id);
  }

  highlight(task: TaskItem) {
    this.container.clear();
    
    const ref = this.container.createComponent(TaskHighlight);
  
    ref.instance.title = task.title;
  }

  editer(id: number) {

    this.editContainer.clear();

    const ref = this.editContainer.createComponent(TaskEdit);

    ref.instance.title = this.taskService2.getTasksList()[id].title;

    ref.changeDetectorRef.detectChanges();

    ref.instance.taskOutput.subscribe((newTitle: string) => {this.taskService2.editTask(id, newTitle);});
  }

  


  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
    this.container.clear();
  }







}
