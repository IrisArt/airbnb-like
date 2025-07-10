import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./features/navbar/navbar";

@Component({
  selector: 'app-root',
  template: `

    <router-outlet />
  `,
  imports: [RouterOutlet, Navbar]
})
export class App {}
