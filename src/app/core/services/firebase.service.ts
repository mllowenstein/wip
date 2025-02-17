import { Injectable } from '@angular/core';
import { Database, stateChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {}
}