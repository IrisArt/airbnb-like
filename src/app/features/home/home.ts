import { Component, inject, signal } from '@angular/core';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { SearchComponent } from '../search/search';
import { PropertiesModel } from '../../core/properties/properties';

/**
 * Home component that displays the main page with search functionality
 * 
 * This component serves as the main landing page, featuring a search form
 * for property discovery, a list of available properties, and an interactive map.
 * The search functionality has been extracted to a separate SearchComponent for better
 * modularity and reusability.
 * 
 * @example
 * ```html
 * <app-home></app-home>
 * ```
 */
@Component({
  selector: 'app-home',
  imports: [SearchComponent, PropertyListComponent, MapComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  private propertiesModel = inject(PropertiesModel)

  properties = this.propertiesModel.properties
}
