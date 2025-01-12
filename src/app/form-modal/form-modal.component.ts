import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  template: `
    <div class="modal" [class.show]="isVisible">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  @Input() isVisible = false;
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closeEvent.emit();
  }
}
