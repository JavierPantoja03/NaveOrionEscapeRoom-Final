import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad4 } from './actividad-4';

describe('Actividad4', () => {
  let component: Actividad4;
  let fixture: ComponentFixture<Actividad4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
