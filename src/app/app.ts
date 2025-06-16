import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HomeComponent]
})
export class App {}
