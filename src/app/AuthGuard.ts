import {Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthGuard implements CanActivate {

  auth(fallback): Observable<boolean> {

    return this.http.get('/auth/check')
      .map((res) => {console.log('auth check response in map ' + res); return true; } ).catch((res) => {
        console.log('auth check response in catch ' + res);
        fallback();
        return false;
      });
  }

  constructor(private http: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth((res) => this.router.navigate(['/login']));
  }
}
