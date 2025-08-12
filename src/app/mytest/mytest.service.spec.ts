import { ComponentFixture, TestBed } from '@angular/core/testing'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Mytest } from './mytest'
import { HttpClient, httpResource } from '@angular/common/http'
import { resource } from '@angular/core'
import { MyTestService } from './mytest.service'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { of } from 'rxjs'

describe('Tester MyTestComponent', () => {
  let service: MyTestService
  let fixture
  let requestSpy = vi.fn();
  let getSpy = vi.fn();

  beforeEach(async () => {

    const body = [{ id: 1, name: 'Ada' }];
    getSpy.mockReturnValue(of(body));

    await TestBed.configureTestingModule({
      providers: [MyTestService, {
        provide: HttpClient,
        useValue: {
            // httpResource passe par `request`. On mocke les deux pour sécurité.
            request: requestSpy,
            get: getSpy,
          },
      }]
    })
    
    service = TestBed.inject(MyTestService)

  })

  test('tester data', async () => {
   
    const data = service.data.value()
    console.log(data)
    expect(data.properties.length).toBe(4)
  })
})