import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1 } from './actividad-1';

describe('Actividad1', () => {
  let component: Actividad1;
  let fixture: ComponentFixture<Actividad1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
