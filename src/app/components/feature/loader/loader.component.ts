import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../core/ui/services/loader.service';

@Component({
  selector: 'mll-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  imports: [CommonModule]
})
export class LoaderComponent {

  loading$ = this.service.isLoading$;

  constructor(private service: LoaderService) { }
}
