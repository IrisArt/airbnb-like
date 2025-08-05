import { DatePickerModule } from 'primeng/datepicker';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Autocomplete, City } from '../autocomplete/autocomplete';
import { PropertyListComponent } from '../properties/property-list/property-list';
import { Property } from '../properties/property.model';
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autocomplete, PropertyListComponent, MapComponent, DatePickerModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  citySelected = signal('');
  arrivalSelected = signal<Date | null>(null)
  departureSelected = signal<Date | null>(null)

  properties = signal<Property[]>([
    {
      id: 1,
      title: 'Appartement moderne avec vue sur la Seine',
      location: 'Paris, Île-de-France',
      price: 120,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      description: 'Magnifique appartement de 2 chambres avec vue imprenable sur la Seine. Idéal pour un séjour romantique.',
      amenities: ['WiFi', 'Cuisine équipée', 'Balcon', 'Vue sur Seine'],
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 2,
      title: 'Loft industriel au cœur de Lyon',
      location: 'Lyon, Auvergne-Rhône-Alpes',
      price: 95,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      description: 'Loft spacieux et lumineux dans un ancien bâtiment industriel rénové. Parfait pour les amateurs d\'architecture.',
      amenities: ['WiFi', 'Parking', 'Espace de travail', 'Climatisation'],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 3,
      title: 'Villa avec piscine près de la plage',
      location: 'Nice, Provence-Alpes-Côte d\'Azur',
      price: 250,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
      description: 'Villa luxueuse avec piscine privée, à seulement 5 minutes à pied de la plage. Vue mer garantie.',
      amenities: ['Piscine privée', 'Vue mer', 'Jardin', 'BBQ', 'WiFi'],
      maxGuests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 4,
      title: 'Chalet cosy en montagne',
      location: 'Chamonix, Auvergne-Rhône-Alpes',
      price: 180,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      description: 'Authentique chalet alpin avec cheminée et vue sur le Mont-Blanc. Parfait pour les sports d\'hiver.',
      amenities: ['Cheminée', 'Vue montagne', 'Ski-in/Ski-out', 'Sauna'],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2
    }
  ]);

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
