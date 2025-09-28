import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3 } from './actividad-3';

describe('Actividad3', () => {
  let component: Actividad3;
  let fixture: ComponentFixture<Actividad3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
