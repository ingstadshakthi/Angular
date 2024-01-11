import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('f') signUpForm!: NgForm;
  formData!: { email: string, subscriptions: string, password: string };
  isSubmitted = false;

  constructor() { }

  onSubmit() {
    this.isSubmitted = true;
    this.formData = this.signUpForm.value;
    console.log(this.signUpForm.value);
  }
}
