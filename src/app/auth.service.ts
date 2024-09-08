import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApirestService } from './servicios/apirest/apirest.service';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getInitialAuthState());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private loginStatusSubject = new BehaviorSubject<boolean>(this.getInitialAuthState());

  constructor(private apirestService: ApirestService, private router: Router) {}

  private getInitialAuthState(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  login(email: string, password: string): Observable<boolean> {
    return this.apirestService.getUsuarios().pipe(
      map((response: any[]) => {
        const user = response.find((user: any) => user.username === email);
        if (user) {
          const isMatch = bcrypt.compareSync(password, user.password);
          if (isMatch) {
            this.isAuthenticatedSubject.next(true);
            localStorage.setItem('isAuthenticated', 'true');
            this.router.navigate(['/dashboard/default']);
            return true;
          } else {
            console.log('Contraseña incorrecta');
            return false;
          }
        } else {
          console.log('Usuario no encontrado');
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al consultar la API', error);
        return of(false);
      })
    );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
    console.log('Usuario deslogueado y sesión destruida');
    this.loginStatusSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated$;
  }
}
