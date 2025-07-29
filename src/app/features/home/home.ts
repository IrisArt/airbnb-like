import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel, Property } from '../../core/properties/properties';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  private propertiesModel = inject(PropertiesModel)

  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)

  searchValue = signal('')

  // properties = resource<Property[], { s: string }>({
  //   params: () => {
  //     return {
  //       s: this.searchValue()
  //     }
  //   },
  //   loader: ({ params, abortSignal }) => {
  //     return fetch('https://apprendre.angular.fr/api/fake/properties?s=' + params.s, {
  //       signal: abortSignal
  //     }).then(res => res.json())
  //   },
  //   defaultValue: []
  // })

  properties = rxResource<Property[], { s: string }>({
    params: () => {
      return {
        s: this.searchValue()
      }
    },
    stream: ({ params }) => {
      return this.propertiesModel.fetchProperties()
    },
    defaultValue: []
  })

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
