import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Property } from '../../../core/properties/properties';

@Component({
  selector: 'app-property-card',
  imports: [RouterLink],
  templateUrl: './property-card.html'
})
export class PropertyCard {
  property = input.required<Property>()
} 