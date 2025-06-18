import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Autocomplete, City } from '../autocomplete/autocomplete';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete],
  template: `
    <main class="h-screen flex flex-col items-center justify-center px-4">
      <h1 class="text-5xl font-bold text-center mb-8 text-gray-800">
        Trouvez un logement !
      </h1>
      
      <div class="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative flex-grow">
            <input
              [(ngModel)]="citySelected"
              placeholder="Recherche un logement"
              class="w-full p-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <app-autocomplete [valueSelected]="citySelected()" (handleSelectCity)="listenCityChange($event)" />
          </div>
          <button
            (click)="search()"
            class="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 p-3 rounded-lg text-white font-medium cursor-pointer"
          >
            Rechercher
          </button>
        </div>
      </div>
    </main>
  `,
})
export class HomeComponent {
  citySelected = signal('Paris')
  
  search() {
    console.log(this.citySelected())
  }

  listenCityChange(city: City) {
    this.citySelected.set(city.name)
  }
}

