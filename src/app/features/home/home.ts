import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel, Property } from '../../core/properties/properties';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent],
  templateUrl: './home.html'
})
export class HomeComponent  {
  private propertiesModel = inject(PropertiesModel)
  private route = inject(ActivatedRoute)

  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)
  properties = this.propertiesModel.properties
  dataParams = toSignal(this.route.data)

  constructor() {
    // const resolved = this.route.snapshot.data['properties'] as Property[]
    // console.log(resolved)
    effect(() => {
      console.log(this.dataParams())
    })
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
