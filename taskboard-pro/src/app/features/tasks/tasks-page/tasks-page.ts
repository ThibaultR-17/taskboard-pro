import { Component, inject, ViewChild, ViewContainerRef, ChangeDetectionStrategy, OnDestroy, signal } from '@angular/core';
import { TaskService, TaskItem } from '../../../core/services/task';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskEdit } from '../task-edit/task-edit';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe, TaskHighlight, TaskEdit],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TasksPage implements OnDestroy {




  protected count=0;
  private myIntervalles=0;
  private subscriptions: Subscription[] = [];


  ngOnInit() {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        this.count++;
        console.log(this.count);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    this.visibilityHandler = handleVisibilityChange;
  
  }
  
  private visibilityHandler?: () => void;

  tasks$!: ReturnType<TaskService['getTaskObservableDelayed']>;

  constructor(private taskService:TaskService){
    this.tasks$ = this.taskService.getTaskObservableDelayed();
  }





 //-----------------------------------------------------------------------------------//







  taskService2 = inject(TaskService);

  tasks2$=this.taskService2.tasks$;

  editingTask= signal<TaskItem | null>(null);
  highlightTask = signal<TaskItem | null>(null);

   addTask(title:string){
    if (title.trim()) {
      this.taskService2.addTask(title);
    }
  }

  supprimerTask(id:number){
    this.taskService2.deleteTask(id);
  }

  terminer(id:number){
    this.taskService2.toggleTask(id);
  }

  highlight(task: TaskItem) {
    this.highlightTask.set(task);
  }

  editTask(task: TaskItem): void {
    this.editingTask.set(task);
  }

  updateTask(data: { id: number; title: string }): void {
    this.taskService2.updateTask(data.id, data.title);
    this.editingTask.set(null);
  }

    cancelEdit(): void {
    this.editingTask.set(null);
  }


  ngOnDestroy(){
    console.log("onDestroy")
    clearInterval(this.myIntervalles);
    if (this.visibilityHandler) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
    }
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];

  }







}
