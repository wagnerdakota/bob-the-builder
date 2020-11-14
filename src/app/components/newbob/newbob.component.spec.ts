import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewbobComponent } from './newbob.component'

describe('NewbobComponent', () => {
  let component: NewbobComponent
  let fixture: ComponentFixture<NewbobComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbobComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbobComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
