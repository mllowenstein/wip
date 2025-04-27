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
  resendTimeout = 60;
  errorMessage = '';
  loading = false;
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
    this.loading = true;
    this.auth.requestOTP(this.username).subscribe(
      () => {
        this.otpSent = true;
        this.loading = false;
        this.startResendTimer();
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
    ).toPromise().then((data) => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['/members']);
    });
  }

  startResendTimer() {
    const interval = setInterval(() => {
      this.resendTimeout--;
      if (this.resendTimeout <= 0) clearInterval(interval);
    }, 1000);
  }

  otpDigits = ['', '', '', '', '', ''];

  onInput(event: any, index: number) {
    const input = event.target;
    this.otpDigits[index] = input.value;
    if (input.value && input.nextElementSibling) {
      input.nextElementSibling.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      (((event.target as HTMLInputElement).previousElementSibling) as HTMLInputElement).focus();
    }
  }
}
