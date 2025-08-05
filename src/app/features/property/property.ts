import { Component, effect, inject, input, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  imports: [FormsModule],
  templateUrl: './property.html',
  styleUrl: './property.css'
})
export class Property {
  id = model()

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }
}
