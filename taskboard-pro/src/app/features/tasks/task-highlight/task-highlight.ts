import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
  imports: [],
  template: `
    <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-6 mb-6 border-4 border-yellow-600">
      <h3 class="text-2xl font-bold text-yellow-900 mb-2">⭐ Tâche mise en avant</h3>
      <p class="text-xl text-yellow-800 font-semibold">{{ title }}</p>
    </div>
  `,
  styleUrl: './task-highlight.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TaskHighlight {
  @Input() title = ''; 
}