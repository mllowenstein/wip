import { Component, OnInit, AfterViewInit, Input, Output , EventEmitter, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ThemeService } from '../../core/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mll-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('nav') nav!: NavbarComponent;

  constructor(
    public themes: ThemeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('oninit...');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit...');
  }

  onNavigating(path: any) {
    this.router.navigateByUrl(`/${path}`);
  }

  onToggling(onoff: any) {
    this.themes.toggleTheme();
  }
}
