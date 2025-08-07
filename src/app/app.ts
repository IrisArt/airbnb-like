import { Component, inject } from '@angular/core';
import { HomeComponent } from './features/home/home';
import { versionToken } from './token';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HomeComponent]
})
export class App {
  version = inject(versionToken)

  constructor() {
    console.log(this.version)
  }
}
