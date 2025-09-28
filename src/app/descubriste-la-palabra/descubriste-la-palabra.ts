import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; // Asegúrate de que Router esté importado

@Component({
  selector: 'app-descubriste-la-palabra',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './descubriste-la-palabra.html', 
  styleUrl: './descubriste-la-palabra.css'     
})
export class DescubristeLaPalabra { 
  
  palabraSecreta: string = 'BARCO';
  letrasUsuario: string[] = Array(this.palabraSecreta.length).fill('');
  
  mensajeResultado: string = '';
  mostrarGlobos: boolean = false;
  
  constructor(private router: Router) {} // Inyecta el Router

  /**
   * NUEVA FUNCIÓN: Navega a la ruta de inicio.
   */
  irAInicio() {
    // Cambia '/' por la ruta real de tu pantalla de inicio si es diferente
    this.router.navigate(['/']); 
  }
  
  // ... onKeyDown, comprobarPalabra, y reintentar permanecen sin cambios
  onKeyDown(index: number, event: KeyboardEvent) {
    const key = event.key;
    const isLetter = /^[a-zA-Z]$/.test(key);

    if (key === 'Backspace') {
        event.preventDefault();
        
        if (this.letrasUsuario[index]) {
            this.letrasUsuario[index] = '';
        } else if (index > 0) { 
            const prevInput = document.getElementById('letra-' + (index - 1)) as HTMLInputElement;
            if (prevInput) {
                this.letrasUsuario[index - 1] = '';
                prevInput.focus();
            }
        }
        return;
    }
    
    if (isLetter) {
        event.preventDefault();
        
        if (!this.letrasUsuario[index]) { 
            this.letrasUsuario[index] = key.toUpperCase();
        }

        if (index < this.letrasUsuario.length - 1) {
            setTimeout(() => {
                const nextInput = document.getElementById('letra-' + (index + 1));
                if (nextInput) {
                    nextInput.focus();
                }
            }, 0); 
        }
        return;
    }

    if (key.length === 1 && key !== 'Tab') {
        event.preventDefault();
    }
  }

  comprobarPalabra() {
    const palabraIngresada = this.letrasUsuario.join('');

    if (palabraIngresada === this.palabraSecreta) {
      this.mensajeResultado = '¡¡FELICITACIONES DESCUBRISTE LA PALABRA!!';
      this.mostrarGlobos = true;
    } else {
      this.mensajeResultado = 'Oh no, esa no es la palabra correcta, puedes intentarlo otra vez, no te preocupes.';
      this.mostrarGlobos = false;
    }
  }

  reintentar() {
    this.letrasUsuario = Array(this.palabraSecreta.length).fill('');
    this.mensajeResultado = '';
    this.mostrarGlobos = false;
    document.getElementById('letra-0')?.focus();
  }
}