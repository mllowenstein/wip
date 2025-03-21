import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NotificationService } from './notification.service';
import { fadeInOut } from '../../app.animations';

@Component({
  standalone: false,
  selector: 'mll-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  animations: [fadeInOut]
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  notifications = this.notificationService.notifications;

  dismiss(id: number) {
    this.notificationService.dismissNotification(id);
  }
}
