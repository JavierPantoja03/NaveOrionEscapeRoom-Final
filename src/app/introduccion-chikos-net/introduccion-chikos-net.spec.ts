import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionChikosNet } from './introduccion-chikos-net';

describe('IntroduccionChikosNet', () => {
  let component: IntroduccionChikosNet;
  let fixture: ComponentFixture<IntroduccionChikosNet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduccionChikosNet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionChikosNet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
