import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { HomeComponent } from "../../home/home";

@Component({
  selector: 'app-main',
  imports: [Navbar, HomeComponent],
  template: `
    <app-navbar />
    <app-home />
  `
})
export class Main {

}
