import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.authenticated) {
      return true;
    } else {
      return this.auth.check().pipe(catchError((err) => {
        this.router.navigateByUrl('/login');
        return of(false);
      }));
    }
  }
}
