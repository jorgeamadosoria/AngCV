import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../common/user';

@Injectable()
export class AuthGuard implements CanActivate {
  user: User;

  auth(success, fallback): Observable<boolean> {

    return this.http.get('/auth/check').map((res) => res ? success(res) : fallback(res));
  }

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth((res) => { this.user = new User(res); return true; }, (res) => { this.router.navigate(['/login']); return false; });
  }
}
