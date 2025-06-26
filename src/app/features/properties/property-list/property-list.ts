import { Component, input, output } from '@angular/core';
import { Property } from '../property.model';
import { PropertyCard } from '../property-card/property-card';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard],
  templateUrl: './property-list.html'
})
export class PropertyListComponent {
  properties = input.required<Property[]>();
} 