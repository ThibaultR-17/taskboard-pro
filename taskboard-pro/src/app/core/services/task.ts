import { Injectable } from '@angular/core';
import { of,filter,map } from 'rxjs';
import  { delay } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

export interface TaskItem{
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskItem[] = [https://github.com/ThibaultR-17/taskboard-pro/pull/1/conflict?name=taskboard-pro%252Fsrc%252Fapp%252Fcore%252Fservices%252Ftask.ts&ancestor_oid=2fed74d96457b32645be477813da5db43a185cb9&base_oid=079356b6412304379e7599f4d12af3ff20931179&head_oid=ad91f8bd01482ae834b2cf5b5543c6f9eccabafc
    {id:1,title:'Préparer le cours Angular', completed: false},
    {id:2,title:'Relire le module RxJS', completed: false},
    {id:3,title:'Corriger les TPs', completed: false},
  ];


  private taskSubject = new BehaviorSubject(this.tasks);
  tasks$=this.taskSubject.asObservable();

  addTask(title : string){
    const newTask: TaskItem = {id: Date.now(), title, completed: false};
    this.tasks = [...this.tasks,newTask];
    this.taskSubject.next(this.tasks);
  }

  getTask(){
    return of(this.tasks).pipe(delay(5000));
  }
  
   getTasks(){
    return this.tasks;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

  clearTasks(){
    this.tasks = [];
  }

  terminateTask(id:number){
    this.tasks.filter(task => task.id == id && task.completed== false).map(task => task.completed = true);
    this.taskSubject.next(this.tasks);
  }

}

export interface TaskItem{
  id: number;
  title: string;
  completed: boolean;
}