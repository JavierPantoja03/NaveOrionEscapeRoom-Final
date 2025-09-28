import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubristeLaPalabra } from './descubriste-la-palabra';

describe('DescubristeLaPalabra', () => {
  let component: DescubristeLaPalabra;
  let fixture: ComponentFixture<DescubristeLaPalabra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescubristeLaPalabra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescubristeLaPalabra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
