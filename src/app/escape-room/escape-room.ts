import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-escape-room',
  standalone: true,
  // Incluimos RouterLink para que el HTML funcione
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './escape-room.html',
  styleUrl: './escape-room.css'
})
export class EscapeRoom {

  // El constructor
  constructor() {} 
  
  // La función reproducirSonido() y sus comentarios han sido eliminados para quitar la lógica de sonido.

}