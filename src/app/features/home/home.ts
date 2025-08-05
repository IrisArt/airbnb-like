import { Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel } from '../../core/properties/properties';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  private propertiesModel = inject(PropertiesModel)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)
  properties = this.propertiesModel.properties
  queryParamsSig = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap
  })
  citySelected = linkedSignal(() => this.queryParamsSig().get('city') ?? '');

  constructor() {
    effect(() => {
      this.router.navigate([], {
        queryParams: {
          city: this.citySelected()
        },
        queryParamsHandling: 'merge',
        replaceUrl: true,
        relativeTo: this.route
      })
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
