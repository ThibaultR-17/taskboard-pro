import { Component, Input, Output,ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  imports:[FormsModule],
  templateUrl: './task-edit.html',
  styleUrls: ['./task-edit.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEdit {
  @Input() title = '';
  @Input() taskId = 0;
  @Output() onSave = new EventEmitter<{id: number, title: string}>();

  editTaskTitle(nouveauNom: string) {
    console.log('Nouveau nom de tâche : ', nouveauNom);
    if (nouveauNom.trim()) {
      this.onSave.emit({id: this.taskId, title: nouveauNom});
    }
  }
}
