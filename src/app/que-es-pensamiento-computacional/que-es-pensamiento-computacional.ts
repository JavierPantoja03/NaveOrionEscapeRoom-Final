import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf si lo usaras

@Component({
  selector: 'app-que-es-pensamiento-computacional',
  templateUrl: './que-es-pensamiento-computacional.html',
  styleUrls: ['./que-es-pensamiento-computacional.css'],
  standalone: true,
  imports: [CommonModule] // Añade CommonModule si vas a usar directivas estructurales
})
export class QueEsPensamientoComputacional {
  // Con 'standalone: true', esta clase es un componente autónomo.
  // No necesitas un archivo de módulo (.module.ts) para declararla.
}