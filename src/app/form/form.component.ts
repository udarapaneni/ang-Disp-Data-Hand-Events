import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: ` <button (click)="onSave($event)">Save</button> `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  onSave($event: {}): void {
    console.log('Saving', $event);
  }
}
