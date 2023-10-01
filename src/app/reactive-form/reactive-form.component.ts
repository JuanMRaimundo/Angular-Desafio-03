import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mayorDeEdadValidator } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [null, [Validators.required, mayorDeEdadValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get emailControl() {
    return this.userForm.controls['email'];
  }
  get passwordValid() {
    return this.userForm.controls['password'];
  }
  get ageControl() {
    return this.userForm.controls['age'];
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Error al cargar formulario');
    }
  }
}
