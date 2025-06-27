import { Component, ElementRef, OnInit, viewChild, viewChildren } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div #refMap class="w-full h-96 border border-gray-300 rounded-lg"></div>
    <div #refMap class="w-full h-96 border border-gray-300 rounded-lg"></div>
  `,
})
export class MapComponent implements OnInit {
  private map!: L.Map;
 // mapContainer = viewChild<ElementRef<HTMLDivElement>>('refMap');
 mapContainers = viewChildren<ElementRef<HTMLDivElement>>('refMap');

  ngOnInit(): void {
    for (let map of this.mapContainers()) {
        const el = map?.nativeElement;
        this.map = L.map(el!).setView([48.8566, 2.3522], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        }).addTo(this.map);

        L.marker([48.8566, 2.3522])
        .addTo(this.map)
        .bindPopup('<b>Paris, France</b><br/>Capitale de la France')
        .openPopup();
    }
  }
}
