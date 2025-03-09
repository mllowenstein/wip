import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NotificationService } from './notification.service';
import { fadeInOut } from '../../core/ui/animations';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'mll-notification',
  imports: [CommonModule],
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
