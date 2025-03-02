import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'mll-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private textureCtx!: CanvasRenderingContext2D;
  private textureCanvas!: HTMLCanvasElement;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private sphere!: THREE.Mesh;

  brushColor = '#ff0000';
  brushSize = 10;

  ngAfterViewInit(): void {
    this.initScene();
    this.createPaintableTexture();
    this.animate();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;

    // TODO
  }

  private createPaintableTexture(): void {
    // TODO

    this.addPaintingControls();
  }

  private addPaintingControls(): void {
    this.renderer.domElement.addEventListener('pointerdown', (event) => this.paint(event), false);
  }

  private paint(event: PointerEvent): void {
    console.log(event);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.sphere.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
