import { Component, inject, signal, WritableSignal, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';
import { Notification } from './notification.model';

@Component({
  standalone: true,
  selector: 'mll-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  notifications: WritableSignal<Notification[]> = signal([]);
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    // this.notifications.set(this.notificationService.notifications);
  }

  dismiss(id: number) {
    this.notificationService.dismissNotification(id);
  }
}
