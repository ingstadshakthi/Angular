import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
  signUpForm!: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.customNameValidator.bind(this)]),
      email: new FormControl(null, Validators.required),
      status: new FormControl('critical', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
  }

  customNameValidator(control: FormControl<any>): { [key: string]: boolean } | null {
    if (control.value === 'Test') {
      return { nameNotAllowed: true };
    }
    return null;
  }

  // customAsyncNameValidator(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'Test') {
  //         resolve({ nameNotAllowed: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   })
  //   return promise;
  // }
}
