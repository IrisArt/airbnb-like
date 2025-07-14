import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel } from '../../core/properties/properties';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  private propertiesModel = inject(PropertiesModel)

  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)
  properties = this.propertiesModel.properties

  ngOnInit(): void {
    this.propertiesModel.fetchProperties().subscribe()
  }

  search() {
    console.log('Searching for:', {
      city: this.citySelected(),
      arrival: this.arrivalSelected(),
      departure: this.departureSelected()
    });
  }

  listenCityChange(city: City) {
    this.citySelected.set(city.name);
  }
}
