import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel } from '../../core/properties/properties';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Autocomplete, PropertyListComponent, MapComponent, ReactiveFormsModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  private propertiesModel = inject(PropertiesModel)

  citySelected = new FormControl('')
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)
  properties = this.propertiesModel.properties

  ngOnInit(): void {
   // 
  //  this.citySelected.valueChanges.subscribe((location) => {
  //   this.propertiesModel.fetchProperties(location).subscribe()
  //  })

    this.citySelected.valueChanges.pipe(
      switchMap((location) => {
        return this.propertiesModel.fetchProperties(location)
      })
    )
    .subscribe((properties) => {
      console.log(properties)
    })
  }

  search() {
    console.log('Searching for:', {
      city: this.citySelected.value,
      arrival: this.arrivalSelected(),
      departure: this.departureSelected()
    });
  }

  listenCityChange(city: City) {
   // this.citySelected.set(city.name);
  }
}
