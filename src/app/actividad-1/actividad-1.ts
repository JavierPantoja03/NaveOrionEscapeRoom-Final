import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad-1.html',
  styleUrl: './actividad-1.css'
})
export class Actividad1 implements AfterViewInit {

  showMessage: boolean = false;
  isCorrect: boolean = false;
  isFullScreen: boolean = false; 
  showSolutionContent: boolean = true;
  showActivity2Button: boolean = false; // 👈 Nueva variable para el botón de navegación
  
  zoomLevel: number = 1;
  panX: number = 0;
  panY: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;
  
  @ViewChild('imageWrapper', { static: true }) imageWrapper!: ElementRef;
  @ViewChild('mainImage', { static: true }) mainImage!: ElementRef;
  
  private imageWrapperWidth: number = 0;
  private imageWrapperHeight: number = 0;
  private imageWidth: number = 0;
  private imageHeight: number = 0;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.imageWrapperWidth = this.imageWrapper.nativeElement.offsetWidth;
    this.imageWrapperHeight = this.imageWrapper.nativeElement.offsetHeight;

    this.mainImage.nativeElement.onload = () => {
      this.imageWidth = this.mainImage.nativeElement.offsetWidth;
      this.imageHeight = this.mainImage.nativeElement.offsetHeight;
    };
  }

  goBack() {
    this.router.navigate(['/']); 
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isFullScreen) {
      this.toggleFullScreen();
    }
  }

  checkAnswer(answer: string) {
    this.showMessage = true;
    if (answer === 'C') {
      this.isCorrect = true;
      this.showSolutionContent = true; 
    } else {
      this.isCorrect = false;
    }
  }

  showComputationalExplanation() {
    this.showSolutionContent = false;
    this.showActivity2Button = true; // 👈 Muestra el nuevo botón cuando se ve la explicación
  }

  closeMessage() {
    this.showMessage = false;
    this.showSolutionContent = true;
    this.showActivity2Button = false; // 👈 Oculta el botón al cerrar el mensaje
  }
  
  goToActivity2() {
    this.router.navigate(['/actividad-2']); // 👈 Nueva función para la navegación
  }

  zoomIn() {
    this.zoomLevel += 0.2;
    this.limitPan();
  }

  zoomOut() {
    if (this.zoomLevel > 1) {
      this.zoomLevel -= 0.2;
    }
    if (this.zoomLevel <= 1) {
        this.zoomLevel = 1;
        this.panX = 0;
        this.panY = 0;
    }
    this.limitPan();
  }

  startDrag(event: MouseEvent) {
    if (this.zoomLevel > 1) {
      this.isDragging = true;
      this.startX = event.clientX - this.panX;
      this.startY = event.clientY - this.panY;
    }
  }

  drag(event: MouseEvent) {
    if (this.isDragging) {
      this.panX = event.clientX - this.startX;
      this.panY = event.clientY - this.startY;
      this.limitPan();
    }
  }

  stopDrag() {
    this.isDragging = false;
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  private limitPan() {
    const scaledWidth = this.imageWidth * this.zoomLevel;
    const scaledHeight = this.imageHeight * this.zoomLevel;
    
    const panLimitX = Math.max(0, (scaledWidth - this.imageWrapperWidth) / 2);
    const panLimitY = Math.max(0, (scaledHeight - this.imageWrapperHeight) / 2);

    if (this.zoomLevel > 1) {
      this.panX = Math.max(-panLimitX, Math.min(panLimitX, this.panX));
      this.panY = Math.max(-panLimitY, Math.min(panLimitY, this.panY));
    } else {
      this.panX = 0;
      this.panY = 0;
    }
  }
}