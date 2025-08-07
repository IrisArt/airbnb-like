import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from './features/home/home';
import { STORAGE_TOKEN } from './core/storage/storage.token';
import { IStorage } from './core/storage/storage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HomeComponent]
})
export class App implements OnInit {
  storage = inject<IStorage>(STORAGE_TOKEN)

  async ngOnInit() {
    await this.storage.put('test', 'fekgevr')
    console.log(await this.storage.get('test'))
  }
}
