import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApirestService } from './servicios/apirest/apirest.service';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})



export class AuthService {


  private isAuthenticated = false;
  constructor(private apirestService: ApirestService, private router: Router) {}


      //FUNCION
      login(email: string, password: string): Observable<boolean> {
        return this.apirestService.getUsuarios().pipe(
          map((response: any[]) => {
            const user = response.find((user: any) => user.username === email);
            if (user) {
              // Usar bcrypt.compareSync para evitar problemas de retorno
              const isMatch = bcrypt.compareSync(password, user.password);
              if (isMatch) {
                // Si la contraseña es correcta, guarda el ID del usuario y redirige
                // localStorage.setItem('userId', user.id);
                this.isAuthenticated = true;
                this.router.navigate(['/dashboard/default']);
                return true;
              } else {
                // Contraseña incorrecta
                console.log('Contraseña incorrecta');
                return false;
              }
            } else {
              // Usuario no encontrado
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

  logout(): void {
/*     localStorage.removeItem('userId');
 */
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('userId');
  }
}
