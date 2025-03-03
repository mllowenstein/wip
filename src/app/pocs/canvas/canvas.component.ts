import { Component, ElementRef, ViewChild, AfterViewInit, Input, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyOwnMaterialModule } from '../../core/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mll-canvas',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    const canvasElement = this.canvas.nativeElement;
    this.ctx = canvasElement!.getContext('2d') || (document.createElement('canvas') as HTMLCanvasElement).getContext('2d') || null;
    this.ctx!.fillStyle = '#ffffff';
    this.ctx!.fillRect(0, 0, canvasElement.width, canvasElement.height);
  }

  drawRectangle() {
    this.ctx!.fillStyle = 'green';
    this.ctx!.fillRect(100, 100, 60, 70);
  }

  clearCanvas() {
    const canvasElement = this.canvas.nativeElement;
    this.ctx!.clearRect(0, 0, canvasElement.width, canvasElement.height);
    this.ctx!.fillStyle = '#ffffff';
    this.ctx!.fillRect(0, 0, canvasElement.width, canvasElement.height);
  }
}
