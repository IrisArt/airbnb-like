import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { MapComponent } from '../map/map';
import { PropertiesModel } from '../../core/properties/properties';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent, AsyncPipe],
  templateUrl: './home.html'
})
export class HomeComponent {
  private propertiesModel = inject(PropertiesModel)
  private destroyRef = inject(DestroyRef)

  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)
  properties$ = this.propertiesModel.fetchProperties()
  subscription!: Subscription

  // constructor() {
  //   this.propertiesModel.fetchProperties().pipe(
  //     takeUntilDestroyed()
  //   ).subscribe()
  // }

  // ngOnInit(): void {
  //     this.propertiesModel.fetchProperties().pipe(
  //       takeUntilDestroyed(this.destroyRef)
  //     ).subscribe()
  // }

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
