import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;

  loginAsAdmin(password: string): Observable<boolean> {
    // Ejemplo simple de autenticación
    if (password === 'adminPassword') {
      this.isAdmin = true;
      return of(true);
    }
    return of(false);
  }

  isAuthenticated(): boolean {
    return this.isAdmin;
  }
}
