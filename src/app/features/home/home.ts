import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, DatePipe],
  templateUrl: './home.html'
})
export class HomeComponent {
  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)

  search() {
    console.log(this.citySelected());
  }

  listenCityChange(city: City) {
    this.citySelected.set(city.name);
  }
}
