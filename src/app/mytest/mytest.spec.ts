import { ComponentFixture, TestBed } from '@angular/core/testing'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Mytest } from './mytest'
import { httpResource } from '@angular/common/http'
import { resource } from '@angular/core'
import { MyTestService } from './mytest.service'

class MyTestServiceMock {
  data = resource({
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
  let fixture: ComponentFixture<Mytest>
  let component: Mytest
  let view: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytest],
      providers: [
        {
          provide: MyTestService,
          useClass: MyTestServiceMock
        }
      ]
    }).compileComponents()
    fixture = TestBed.createComponent(Mytest)
    fixture.detectChanges()
    component = fixture.componentInstance
    view = fixture.nativeElement
  })

  test('tester output()', () => {
    const handler = vi.fn()
    component.changeTitle.subscribe(handler)

    const btn: HTMLButtonElement | null = view.querySelector('button')

    btn?.click()

    expect(handler).toHaveBeenCalledWith('Nouveau Titre')
  })

  test('Vérifier que la liste est bien affichée', async () => {
    await fixture.whenStable()
    const li = view.querySelectorAll('li')
    expect(li.length).toBe(1)
  })
})