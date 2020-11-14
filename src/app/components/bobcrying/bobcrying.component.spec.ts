import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BobcryingComponent } from './bobcrying.component'

describe('BobcryingComponent', () => {
  let component: BobcryingComponent
  let fixture: ComponentFixture<BobcryingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobcryingComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BobcryingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
