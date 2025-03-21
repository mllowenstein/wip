import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventType } from '../data/schema/enums';
import { EventData, ChatMessage } from '../data/schema';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventSubject = new BehaviorSubject<EventData | null>(null);
  private socket!: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onmessage = (event) => {
      const receivedEvent: EventData = JSON.parse(event.data);
      this.eventSubject.next(receivedEvent);
    }
  }

  emit(type: EventType, payload?: any): void {
    const event: EventData = { type, payload };
    this.socket.send(JSON.stringify(event));
  }

  on<T>(type: EventType): Observable<T> {
    return this.eventSubject.asObservable().pipe(
      filter((event): event is EventData => event !== null && event.type === type),
      map((event) => event.payload as T)
    );
  }
}
