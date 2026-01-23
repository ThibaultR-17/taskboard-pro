import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHighlight } from './task-highlight';

describe('TaskHighlight', () => {
  let component: TaskHighlight;
  let fixture: ComponentFixture<TaskHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHighlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskHighlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TaskHighlight', () => {

  it('devrait initialiser title avec une chaîne vide', () => {
      const component = new TaskHighlight();
      expect(component.title).toBe('');
  });

  it('devrait permettre de changer le titre', () => {
      const component = new TaskHighlight();
      component.title = 'Tâche en avant';
      expect(component.title).toBe('Tâche en avant');
  });

  });
});

describe('TaskHighlight2', () => {
  let component: TaskHighlight;
  let fixture: ComponentFixture<TaskHighlight>;

  beforeEach(async () => {
      // Configuration du module de test
      await TestBed.configureTestingModule({
      imports: [TaskHighlight]
      }).compileComponents();

      // Création du composant
      fixture = TestBed.createComponent(TaskHighlight);
      component = fixture.componentInstance;
  });

  it('devrait afficher le titre dans le DOM', () => {
      // ARRANGE : Définir le titre
      component.title = 'Ma tâche';
      
      // ACT : Mettre à jour le template
      fixture.detectChanges(); // ⚠️ IMPORTANT !

      // ASSERT : Vérifier le DOM
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p')?.textContent).toContain('Ma tâche');
  });
});



describe('TaskHighlight Component', () => {
  let component: TaskHighlight;
  let fixture: ComponentFixture<TaskHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHighlight]  // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(TaskHighlight);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher le titre passé en @Input', () => {
    // ARRANGE : Définir la valeur de @Input
    component.title = 'Apprendre Angular';
    
    // ACT : Déclencher la détection de changements
    fixture.detectChanges();
    
    // ASSERT : Vérifier que le titre s'affiche
    const element = fixture.nativeElement;
    const h2 = element.querySelector('p');
    expect(h2.textContent).toBe('Apprendre Angular');
  });

  it('devrait avoir un titre vide par défaut', () => {
    expect(component.title).toBe('');
  });
});