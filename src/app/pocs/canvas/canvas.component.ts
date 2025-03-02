import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as THREE from 'three';
import { MyOwnMaterialModule } from '../../core/material';

@Component({
  selector: 'mll-canvas',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 2;

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(this.textureCanvas)
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);
  }

  private createPaintableTexture(): void {
    this.textureCanvas = document.createElement('canvas');
    this.textureCanvas.width = 512;
    this.textureCanvas.height = 512;
    this.textureCtx = this.textureCanvas.getContext('2d')!;
    this.textureCtx.fillStyle = '#ffffff'; // Start with a white canvas
    this.textureCtx.fillRect(0, 0, 512, 512);

    this.addPaintingControls();
  }

  private addPaintingControls(): void {
    this.renderer.domElement.addEventListener('pointerdown', (event) => this.paint(event), false);
  }

  private paint(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * this.textureCanvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * this.textureCanvas.height;

    this.textureCtx.fillStyle = this.brushColor;
    this.textureCtx.beginPath();
    this.textureCtx.arc(x, y, this.brushSize, 0, Math.PI * 2);
    this.textureCtx.fill();

    (this.sphere.material as THREE.MeshBasicMaterial).map!.needsUpdate = true;
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.sphere.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
