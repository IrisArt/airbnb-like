import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Search } from './search';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Search],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  config = signal<any>({ version: '1.0.0', title: 'Mon App' })

  constructor() {
    setTimeout(() => {
      this.config.set({
        version: '2.0.0'
      })
    }, 1000)
  }
}
