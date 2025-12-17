import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Home } from './home/home';
import { TasksPage } from './features/tasks/tasks-page/tasks-page';


export const routes: Routes = [
    {path : '',component: Home},
    {path : 'about',
        loadChildren:()=> import('./features/about/routes').then(a=>a.ABOUT_ROUTES)
    },
    {path : 'tasks',
    loadChildren:()=> import('./features/tasks/tasks-page/routes').then(a=>a.TASK_ROUTES)
    },
];