import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-mytest',
  imports: [],
  templateUrl: './mytest.html',
  styleUrl: './mytest.css'
})
export class Mytest {
  title = input('')
  changeTitle = output<string>()
  
}
