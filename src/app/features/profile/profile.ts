import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type UpdateProfileForm = {
  name: FormControl<string>
  email: FormControl<string>
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class ProfileComponent {
  propEmail = new FormControl()
  propName = new FormControl()
  form = new FormGroup<UpdateProfileForm>({
    name: this.propName,
    email: this.propEmail
  })

  updateProfile() {
    console.log(this.form.value.name)
  }
} 