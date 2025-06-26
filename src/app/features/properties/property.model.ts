/**
 * ## Property Model
 * 
 * Defines the structure for property listings in the application.
 * This interface represents a rental property with all necessary information
 * for display and booking functionality.
 * 
 * ### Design Concept
 * The Property interface encapsulates all the essential data needed to
 * display property cards and handle booking operations. It follows a
 * clean data structure that can be easily extended for future features.
 * 
 * @example
 * ```typescript
 * const property: Property = {
 *   id: 1,
 *   title: 'Beautiful Apartment',
 *   location: 'Paris, France',
 *   price: 120,
 *   rating: 4.8,
 *   image: 'https://example.com/image.jpg',
 *   description: 'A lovely apartment...'
 * };
 * ```
 */
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