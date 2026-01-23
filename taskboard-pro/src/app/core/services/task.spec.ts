import { TestBed } from '@angular/core/testing';

import { TaskService } from './task';

describe('Task Service', () => {
let service: TaskService;

beforeEach(() => {
    // Configurer TestBed
    TestBed.configureTestingModule({
    providers: [TaskService]
    });
    
    // Récupérer le service
    service = TestBed.inject(TaskService);
    service.clearTasks();  // État propre
});

it('devrait être créé', () => {
    expect(service).toBeTruthy();
});

it('devrait ajouter une tâche', () => {
    service.addTask('Apprendre les tests');
    
    const tasks = service.getTasksList();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Apprendre les tests');
    expect(tasks[0].completed).toBe(false);
});

it('devrait supprimer une tâche', () => {
    service.addTask('Tâche temporaire');
    const taskId = service.getTasksList()[0].id;
    
    service.deleteTask(taskId);
    
    expect(service.getTasksList().length).toBe(0);
});

it('devrait marquer une tâche comme terminée', () => {
    service.addTask('Tâche à terminer');
    const taskId = service.getTasksList()[0].id;
    
    service.toggleTask(taskId);
    
    const task = service.getTasksList()[0];
    expect(task.completed).toBe(true);
});
});
    