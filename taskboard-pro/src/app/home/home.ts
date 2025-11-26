import { Component } from '@angular/core';
import { TasksPage } from '../features/tasks/tasks-page/tasks-page';


@Component({
  selector: 'app-home',
  imports: [TasksPage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
