import { Injectable, signal } from '@angular/core';

export interface Property {
  /** Unique identifier for the property */
  id: number;

  /** Property title/name */
  title: string;

  /** Full location string (city, region) */
  location: string;

  /** Price per night in euros */
  price: number;

  /** Average rating (0-5 scale) */
  rating: number;

  /** Main property image URL */
  image: string;

  /** Property description */
  description: string;

  /** Optional: Additional property features */
  amenities?: string[];

  /** Optional: Maximum number of guests */
  maxGuests?: number;

  /** Optional: Number of bedrooms */
  bedrooms?: number;

  /** Optional: Number of bathrooms */
  bathrooms?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PropertiesModel {
  properties = signal<Property[]>([
    {
      id: 1,
      title: 'Appartement moderne avec vue sur la Seine',
      location: 'Paris, Île-de-France',
      price: 120,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      description:
        'Magnifique appartement de 2 chambres avec vue imprenable sur la Seine. Idéal pour un séjour romantique.',
      amenities: ['WiFi', 'Cuisine équipée', 'Balcon', 'Vue sur Seine'],
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 2,
      title: 'Loft industriel au cœur de Lyon',
      location: 'Lyon, Auvergne-Rhône-Alpes',
      price: 95,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      description:
        "Loft spacieux et lumineux dans un ancien bâtiment industriel rénové. Parfait pour les amateurs d'architecture.",
      amenities: ['WiFi', 'Parking', 'Espace de travail', 'Climatisation'],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 3,
      title: 'Villa avec piscine près de la plage',
      location: "Nice, Provence-Alpes-Côte d'Azur",
      price: 250,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
      description:
        'Villa luxueuse avec piscine privée, à seulement 5 minutes à pied de la plage. Vue mer garantie.',
      amenities: ['Piscine privée', 'Vue mer', 'Jardin', 'BBQ', 'WiFi'],
      maxGuests: 8,
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 4,
      title: 'Chalet cosy en montagne',
      location: 'Chamonix, Auvergne-Rhône-Alpes',
      price: 180,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      description:
        "Authentique chalet alpin avec cheminée et vue sur le Mont-Blanc. Parfait pour les sports d'hiver.",
      amenities: ['Cheminée', 'Vue montagne', 'Ski-in/Ski-out', 'Sauna'],
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2,
    },
  ]);
}
