import { Routes } from '@angular/router';
import { Home } from './home/home';



export const routes: Routes = [
    {path : '',component: Home},
    {path : 'about',
        loadChildren:()=> import('./features/about/routes').then(a=>a.ABOUT_ROUTES)
    },
    {path : 'tasks',
    loadChildren:()=> import('./features/tasks/tasks-page/routes').then(a=>a.TASK_ROUTES)
    },
];