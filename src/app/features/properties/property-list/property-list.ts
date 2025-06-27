import { Component, input, output } from '@angular/core';
import { PropertyCard } from '../property-card/property-card';
import { Property } from '../../../core/properties/properties';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard],
  templateUrl: './property-list.html'
})
export class PropertyListComponent {
  properties = input.required<Property[]>();
} 