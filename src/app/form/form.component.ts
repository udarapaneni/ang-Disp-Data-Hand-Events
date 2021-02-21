import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: ` <input (keyup)="onKeyUp($event)" /> `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  onKeyUp($event: any): void {
    if ($event.keyCode === 13) {
      console.log('Enter was entered');
    }
    // console.log('Saving', $event);
  }
}
