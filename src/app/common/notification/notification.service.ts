import { Injectable, inject, WritableSignal, signal } from '@angular/core';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsList: WritableSignal<Notification[]> = signal<Notification[]>([])
  private idCounter = 0;

  get notifications() {
    return this.notificationsList;
  }

  showNotification(message: string, type: Notification, duration: number): void {
    const id = this.idCounter++;
    // const newNotification = Notification = { id, type, duration };

    // this.notificationsList.update(notification => [...this.notificationsList, new Notification);])
    setTimeout(() => this.dismissNotification(id), duration);
  }


  dismissNotification(id: number): void {
    this.notificationsList.update(notifications => notifications.filter(n => n.id && n.id !== id));
  }

}
