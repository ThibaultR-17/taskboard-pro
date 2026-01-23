import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
  imports: [],
  template: `
    <div class="highlight-container">
      <h3 class="highlight-title">⭐ Tâche mise en avant</h3>
      <p class="highlight-content">{{ title }}</p>
    </div>
  `,
  styleUrl: './task-highlight.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TaskHighlight {
  @Input() title = ''; 
}