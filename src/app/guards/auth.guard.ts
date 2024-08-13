// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApirestService } from '../servicios/apirest/apirest.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apirestService: ApirestService, private router: Router) {}

  canActivate(): boolean {
    // if (this.apirestService.isLoggedIn()) {
    //   return true; // Permite el acceso si hay una sesión activa
    // } else {
    //   this.router.navigate(['/login']); // Redirige a la página de inicio de sesión si no hay sesión activa
    //   return false;
    // }
  }




  // constructor(private authService: AuthService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}
