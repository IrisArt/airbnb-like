import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Autocomplete, City } from '../autocomplete/autocomplete';

@Component({
  selector: 'app-search',
  imports: [FormsModule, Autocomplete],
  templateUrl: './search.html'
})
export class SearchComponent  {
  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null);
  departureSelected = signal<Date | null>(null);
  guestsSelected = signal<number>(1);
  /**
   * Handles city selection from autocomplete component
   * 
   * Updates the citySelected signal and triggers URL parameter update
   * 
   * @param city - The selected city object
   */
  listenCityChange(city: City) {
    this.citySelected.set(city.name);
  }

  search() {
    console.log('Searching for:', {
      city: this.citySelected(),
      arrival: this.arrivalSelected(),
      departure: this.departureSelected(),
      guests: this.guestsSelected()
    });
  }
} 