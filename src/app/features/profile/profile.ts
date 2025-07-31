import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { MeModel } from '../../core/properties/me';

type UpdateProfileForm = {
  name: string
  email: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class ProfileComponent {
  private builder = inject(FormBuilder)
  private me = inject(MeModel)

  form = this.builder.group<UpdateProfileForm>({
    name: '',
    email: ''
  })

  meData = toSignal(this.me.getMe())

  constructor() {
    effect(() => {
      const me = this.meData()
      if (me) {
        this.form.patchValue(me)
      }
    })
  }

  updateProfile() {
    console.log(this.form.value.name)
  }
} 