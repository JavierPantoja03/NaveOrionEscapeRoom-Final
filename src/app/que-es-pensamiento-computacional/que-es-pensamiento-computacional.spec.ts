import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsPensamientoComputacional } from './que-es-pensamiento-computacional';

describe('QueEsPensamientoComputacional', () => {
  let component: QueEsPensamientoComputacional;
  let fixture: ComponentFixture<QueEsPensamientoComputacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsPensamientoComputacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsPensamientoComputacional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
