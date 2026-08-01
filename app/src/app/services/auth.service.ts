import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AuthUser, LoginPayload, RegisterPayload } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Stato dell'utente loggato, esposto come signal read-only.
  private readonly _currentUser = signal<AuthUser | null>(null);
  readonly currentUser = this._currentUser.asReadonly();

  login(payload: LoginPayload): Observable<AuthUser> {
    return of({ email: payload.email }).pipe(
      delay(700),
      tap(() => {
        throw new Error(
          'Login non disponibile: il backend arriverà nella Tappa 4.'
        );
      })
    );
  }

  /**
   * Mock: stessa logica di login, in attesa del backend reale.
   */
  register(payload: RegisterPayload): Observable<AuthUser> {
    return of({ email: payload.email }).pipe(
      delay(700),
      tap(() => {
        throw new Error(
          'Registrazione non disponibile: il backend arriverà nella Tappa 4.'
        );
      })
    );
  }

  logout(): void {
    this._currentUser.set(null);
  }
}
