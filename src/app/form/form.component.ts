import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: ` <input #email (keyup.enter)="onKeyUp(email.value)" /> `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  onKeyUp(email: any): void {
    console.log(email);
    //  console.log('Saving', $event);
  }
}
