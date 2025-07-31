import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class MeModel {
  private http = inject(HttpClient);

  getMe(): Observable<User> {
    return this.http.get<User>('https://apprendre.angular.fr/api/fake/me');
  }
}
