import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-introduccion-chikos-net',
  standalone: true, 
  imports: [],
  templateUrl: './introduccion-chikos-net.html',
  styleUrl: './introduccion-chikos-net.css'
})
export class IntroduccionChikosNet {

  // Inyectamos el Router para poder navegar
  constructor(private router: Router) {}

  /**
   * Navega a la ruta principal ('/') al hacer clic en el botón de Inicio.
   */
  navegarAInicio() {
    this.router.navigate(['/']); 
  }

  /**
   * Función opcional para el botón de "Continuar" a la actividad de la palabra.
   */
  navegarASiguienteActividad() {
    // Cambia '/descubriste-la-palabra' si tu ruta es diferente
    this.router.navigate(['/descubriste-la-palabra']); 
  }
}