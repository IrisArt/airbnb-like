import { Component, contentChild, contentChildren, effect, ElementRef } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html'
})
export class PropertyCard {
  image = contentChild<ElementRef<HTMLImageElement>>('imageRef')
  slots = contentChildren<ElementRef<HTMLDivElement>>('slotRef')

  constructor() {
    effect(() => {
      console.log(this.slots())
    })
  }
} 