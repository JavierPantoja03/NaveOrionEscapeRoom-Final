import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscapeRoom } from './escape-room';
import { RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

describe('EscapeRoom', () => {
  let component: EscapeRoom;
  let fixture: ComponentFixture<EscapeRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Usamos 'imports' en lugar de 'declarations' para componentes standalone
      imports: [EscapeRoom, CommonModule, FormsModule, RouterLink] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeRoom);
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  // --- PRUEBAS ESTÁNDAR ---

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
  
});