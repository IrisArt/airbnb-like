import { Component, computed, input, OnDestroy, OnInit, output, signal } from '@angular/core';

export interface City {
  name: string
  region: string
}

@Component({
  selector: 'app-autocomplete',
  imports: [],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css'
})
export class Autocomplete {
  valueSelected = input.required<string>()
  handleSelectCity = output<City>()
  hasLatestTerm = computed(() => this.valueSelected())

  cities = signal<City[]>([{
    name: 'Paris',
    region: 'Île-de-France'
  }, {
    name: 'Lyon',
    region: 'Auvergne-Rhône-Alpes'
  }, {
    name: 'Marseille',
    region: 'Provence-Alpes-Côte d\'Azur'
  }, {
    name: 'Toulouse',
    region: 'Occitanie'
  }, {
    name: 'Nice',
    region: 'Provence-Alpes-Côte d\'Azur'
  }])
  citiesFiltered = computed(() => {
    return this.cities().filter(city => city.name.startsWith(this.valueSelected()))
  })
  
  selectCity(city: City) {
    this.handleSelectCity.emit(city)
  }
}
