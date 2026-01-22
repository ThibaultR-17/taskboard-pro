import { Injectable } from '@angular/core';
import { of} from 'rxjs';
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
  private tasks: TaskItem[] = [
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

  getTaskObservableDelayed(){
    return of(this.tasks).pipe(delay(5000));
  }

  getTaskObservable(){
    return of(this.tasks);
  }

  getTasksList(){
    return this.tasks;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

  clearTasks(){
    this.tasks = [];
  }

  toggleTask(id:number){
    const task =this.tasks.find(task => task.id == id && task.completed== false);
    if (task){
      task.completed = true;
    }
    
    this.taskSubject.next(this.tasks);
  }

  updateTask(id: number, text: string) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.title = text;
      this.taskSubject.next([...this.tasks]);
    }
  }

}