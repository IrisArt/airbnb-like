import { TestBed } from '@angular/core/testing'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { MyTestService } from './mytest.service'
import { Injectable, resource } from '@angular/core'

@Injectable()
class MyTestServiceMock extends MyTestService {
  override data: any = resource({
    loader: async () => {
      return {
        properties: [
          {
            "id": 1,
            "title": "Appartement moderne avec vue sur la Seine",
            "location": "Paris, Île-de-France",
            "price": 120,
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
            "description": "Magnifique appartement de 2 chambres avec vue imprenable sur la Seine. Idéal pour un séjour romantique.",
            "amenities": [
              "WiFi",
              "Cuisine équipée",
              "Balcon",
              "Vue sur Seine"
            ],
            "maxGuests": 4,
            "bedrooms": 2,
            "bathrooms": 1
          }
        ]
      }
    },
    defaultValue: {
        properties: []
    }
  })
}

describe('Tester MyTestComponent', () => {
  let service: MyTestService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: MyTestService,
        useClass: MyTestServiceMock
      }]
    })
    
    service = TestBed.inject(MyTestService)
    TestBed.tick()
  })

  test('tester data', () => {
    const data = service.data.value()
    expect(data.properties.length).toBe(1)
  })
})