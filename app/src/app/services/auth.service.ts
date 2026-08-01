import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AuthUser, LoginPayload, RegisterPayload } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _currentUser = signal<AuthUser | null>(null);
  readonly currentUser = this._currentUser.asReadonly();
  private token: string | null = null;

  login(payload: LoginPayload): Observable<AuthUser> {
    return of({ email: payload.email }).pipe(
      delay(700),
      tap(() => {
        throw new Error(
          'Login non disponibile'
        );
      })
    );
  }

  register(payload: RegisterPayload): Observable<AuthUser> {
    return of({ email: payload.email }).pipe(
      delay(700),
      tap(() => {
        throw new Error(
          'Registrazione non disponibile'
        );
      })
    );
  }

  logout(): void {
    this._currentUser.set(null);
  }

  public isLogged(): boolean {
    return this.token !== null;
  }
}
