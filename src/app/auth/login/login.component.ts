import { Notification } from '../../common/notification/notification.model';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { env } from '../../../env/env';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MyOwnMaterialModule } from '../../core/material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationService } from '../../common/notification/notification.service';
import { Store, StoreModule } from '@ngrx/store';
import LoginActions from './store/login.actions';

@Component({
  selector: 'mll-login',
  standalone: true,
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    StoreModule,
  ]
})
export class LoginComponent {
  errorNote: Notification = {
    id: Math.random() * 1000000,
    type: 'error',
    message: 'An error occurred during login.'
  };
  private notifier = inject(NotificationService);
  private route = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private store = inject(Store);

  otpRequested = signal(false);
  loading = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    otp: [''],
  });

  checkEmailForOTP(username: string): void {
    console.log(username);
    if (this.loginForm.value.email) {
      this.otpRequested.set(true);
      this.store.dispatch(LoginActions.requestOtp({ email: this.loginForm.value.email }));
    }
  }

  loginWithOTP(username: string, otp: string): void {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.store.dispatch(LoginActions.verifyOtp({
        email: this.loginForm.value.email || username,
        otp: this.loginForm.value.otp || otp,
      }));
      if (this.auth.isAuthenticated()) {
        const backUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(backUrl);
      } else {
        this.notifier.showNotification(this.errorNote);
      }
    }, 2000);
  }
}


