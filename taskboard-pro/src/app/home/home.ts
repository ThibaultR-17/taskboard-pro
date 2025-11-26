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
  ngOnInit() { //démarre lorsque le composant est affiché dans le DOM,
  console.log('Composant initialisé');
  }
  ngOnDestroy() { //se termine dès que le composant est retiré du DOM —par exemple, lorsqu’on change de route.
  console.log('Composant détruit');
  }

  tasks$!: ReturnType<TaskService['getTask']>;

  constructor(private taskService:TaskService){
    this.tasks$ = this.taskService.getTask();
  }
}
