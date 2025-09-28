import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad2 } from './actividad-2';

describe('Actividad2', () => {
  let component: Actividad2;
  let fixture: ComponentFixture<Actividad2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
