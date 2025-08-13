import { Component, input, output } from '@angular/core';
import { PropertyCard } from '../property-card/property-card';
import { Property } from '../../../core/properties/properties';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCard, NgOptimizedImage],
  templateUrl: './property-list.html'
})
export class PropertyListComponent {
  properties = input.required<Property[]>();
} 