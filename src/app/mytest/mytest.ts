import { httpResource } from '@angular/common/http';
import { Component, inject, input, output, signal } from '@angular/core';
import { Property } from '../core/properties/properties';
import { MyTestService } from './mytest.service';


@Component({
  selector: 'app-mytest',
  imports: [],
  templateUrl: './mytest.html',
  styleUrl: './mytest.css'
})
export class Mytest {
  private mytestService = inject(MyTestService)
  title = input('')
  changeTitle = output<string>()
  data = this.mytestService.data
}
