import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
  `,
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isActive = true;
  constructor() {}

  ngOnInit(): void {}
}
