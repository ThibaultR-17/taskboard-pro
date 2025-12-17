import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  imports:[FormsModule],
  templateUrl: './task-edit.html',
  styleUrls: ['./task-edit.css'],
})
export class TaskEdit {
  @Input() title = '';
  @Output() taskOutput = new EventEmitter<string>();

  editTaskTitle(nouveauNom: string) {
    if (nouveauNom.trim()) {
      this.taskOutput.emit(nouveauNom);
    }
  }
}
