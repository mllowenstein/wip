import { Component, ElementRef, inject, Renderer2, ViewChild, signal } from '@angular/core';
import WebXRPolyfill from 'webxr-polyfill';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';

new WebXRPolyfill();

@Component({
  selector: 'mll-ar-demo',
  standalone: true,
  template: `<button (click)="startAR()">Start AR</button> <canvas #arCanvas></canvas>`,
  styles: [`
    button { position: fixed; top: 20px; left: 20px; z-index: 10; }
  `],
  imports: [CommonModule, MyOwnMaterialModule]
})
export class ARDemoComponent {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private xrSession!: XRSession | null;
  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  @ViewChild('arCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  // ✅ Reactive State Signal (Angular 16+)
  isARActive = signal(false);

  ngAfterViewInit() {
    this.setupThreeJS();
  }

  private setupThreeJS() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.xr.enabled = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // 💡 Create a simple 3D cube to display in AR
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);  // Small cube
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Attach to canvas
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
  }

  async startAR() {
  if (!navigator.xr) {
    alert("WebXR is not supported on this device/browser.");
    return;
  }

  const supported = await navigator.xr.isSessionSupported('immersive-ar');
  if (!supported) {
    alert("AR mode is not supported on this device.");
    return;
  }

  try {
    this.xrSession = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local-floor']
    });

    this.renderer.xr.setSession(this.xrSession);
    this.isARActive.set(true);
    this.renderAR();
  } catch (error) {
    console.error("AR Session failed:", error);
  }
}

  private renderAR() {
    const renderLoop = () => {
      this.renderer.setAnimationLoop(() => {
        this.renderer.render(this.scene, this.camera);
      });
    };

    renderLoop();
  }
}
