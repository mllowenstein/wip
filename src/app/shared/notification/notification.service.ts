import { Injectable, inject, WritableSignal, signal } from '@angular/core';
import { Notification, DURATION, TestNotification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsList: WritableSignal<Notification[]> = signal<Notification[]>([]);

  get notifications() {
    return this.notificationsList;
  }

  addNotification(message: string, type: 'info' | 'success' | 'warning' | 'error'): void {
    const newId: number = Math.random() * 10000;
    const newNotification: Notification = {
      id: newId,
      message,
      type,
    };
    this.notifications.update((current) => [...current, newNotification]);
    this.postNotification(newId);
  }

  showNotification(note: Notification): void {
    this.notifications.update((current) => [...current, note]);
    this.postNotification(note.id);
  }

  postNotification(id: number): void {
    setTimeout(() => this.dismissNotification(id), DURATION);
  }

  dismissNotification(id: number): void {
    this.notificationsList.update(notifications => notifications.filter(n => n.id && n.id !== id));
  }
}
