
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
  duration?: number;
}

export interface TestNotification {
  id: number;
  message: string;
  type: NotificationType;
  fn?: Function;
}

export const DURATION: number = 3000;
