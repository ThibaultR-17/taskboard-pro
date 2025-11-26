import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import  { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks= [
    {id:1,title:'Préparer le cours Angular'},
    {id:2,title:'Relire le module RxJS'},
    {id:3,title:'Corriger les TPs'},
  ];

  getTask(){
    return of(this.tasks).pipe(delay(1000));
  }
}
