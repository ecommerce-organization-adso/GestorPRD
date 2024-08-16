import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApirestService } from './servicios/apirest/apirest.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private apirestService: ApirestService, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.apirestService.getUsuarios().pipe(
      map((response: any[]) => {
        const user = response.find(
          (user: any) => user.username === email && user.password === password
        );

        if (user) {
          localStorage.setItem('userId', user.id);
          this.router.navigate(['/dashboard/default']); // Redirigir a 'dashboard/default' si es correcto
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al consultar la API', error);
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('userId');
  }
}
