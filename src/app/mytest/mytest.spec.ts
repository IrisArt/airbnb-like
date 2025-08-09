import { ComponentFixture, TestBed } from '@angular/core/testing'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Mytest } from './mytest'

describe('Tester MyTestComponent', () => {
  let fixture: ComponentFixture<Mytest>
  let component: Mytest
  let view: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytest]
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
})