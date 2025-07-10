import { Component, effect, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css'
})
export class Property {
  id = input()

  constructor() {
    effect(() => {
      console.log(this.id())
    })
  }
}
