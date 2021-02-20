import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <div (click)="onDivClick()">
      <button (click)="onSave($event)">Save</button>
    </div>
  `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  onSave($event: any): void {
    $event.stopPropagation(); // to stop event bubbling
    console.log('Saving', $event);
  }
  onDivClick(): void {
    console.log('Div Clicked');
  }
}
