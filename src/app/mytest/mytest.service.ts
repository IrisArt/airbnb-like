import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Property } from "../core/properties/properties";

interface HttpResourceData {
    properties: Property[]
  }
  

@Injectable({
    providedIn: 'root'
})
export class MyTestService {
    data = httpResource<HttpResourceData>(() => 'https://apprendre.angular.fr/api/fake/properties', {
        defaultValue: {
            properties: []
        }
    })
}