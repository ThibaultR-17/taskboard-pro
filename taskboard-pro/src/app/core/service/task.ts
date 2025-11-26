import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import  { delay } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks= [
    {id:1,title:'Préparer le cours Angular'},
    {id:2,title:'Relire le module RxJS'},
    {id:3,title:'Corriger les TPs'},
  ];


  private taskSubject = new BehaviorSubject(this.tasks);
  tasks$=this.taskSubject.asObservable();

  addTask(title : string){
    const newTask={id: Date.now(), title};
    this.tasks = [...this.tasks,newTask];
    this.taskSubject.next(this.tasks);
  }

  getTask(){
    return of(this.tasks).pipe(delay(5000));
  }
}
