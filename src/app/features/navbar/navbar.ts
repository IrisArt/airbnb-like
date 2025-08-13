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

}
