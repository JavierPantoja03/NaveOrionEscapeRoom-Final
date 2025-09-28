import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad5 } from './actividad-5';

describe('Actividad5', () => {
  let component: Actividad5;
  let fixture: ComponentFixture<Actividad5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
