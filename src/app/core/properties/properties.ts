import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

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

export interface PropertyResponse {
  properties: Property[],
  total: number
}

@Injectable({
  providedIn: 'root',
})
export class PropertiesModel {
  private http = inject(HttpClient)

  properties = signal<Property[]>([]);

  fetchProperties(): Observable<Property[]> {
    return this.http.get<PropertyResponse>('https://apprendre.angular.fr/api/fake/properties').pipe(
      map((obj) => {
        return obj.properties
      }),
      tap((properties) => {
        this.properties.set(properties)
      })
    )
  }
}