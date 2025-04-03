import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'mll-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit {

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

