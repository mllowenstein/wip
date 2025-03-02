import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { MyOwnMaterialModule } from '../../core/material';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'mll-skeleton',
  standalone: true,
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  imports: [CommonModule, MyOwnMaterialModule],
  providers: [LoadingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonComponent  {
  // @Input() width = '100%';
  // @Input() height = '20px';
  @Input() type: 'card' | 'list' | 'table' = 'card';
  @Input() count: number = 1;
  isLoading!: boolean;

  constructor(private loadingService: LoadingService) { }
  ngOnInit(): void {
    this.loadingService.loading$.subscribe(isLoading => this.isLoading = isLoading);
  }
}
