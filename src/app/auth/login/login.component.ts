import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { StorageKeys } from '../../core/data/schema/enums';
import { map, tap } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'mll-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('nav') nav!: NavbarComponent;
  errorMessage = '';
  otpSent = false;
  username = '';
  otp = '';

  constructor(
    public themes: ThemeService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    console.log('afterviewinit...');
  }

  onNavigating(path: any) {
    this.router.navigateByUrl(`/${path}`);
  }

  onToggling(onoff: any) {
    this.themes.toggleTheme();
  }

  requestOtp(): void {
    this.auth.requestOTP(this.username).subscribe(
      () => {
        this.otpSent = true;
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  verifyOtp(): void {
    this.auth.verifyOTP(this.username, this.otp).pipe(
      tap((token) => console.log(token)),
      map((token: any) => token ? localStorage.setItem(StorageKeys.Token, JSON.stringify(token)) : localStorage.removeItem(StorageKeys.Token))
    );
  }
}
