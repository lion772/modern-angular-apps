import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { take, skipWhile, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.userSignedin$.pipe(
      skipWhile((val) => val === null),
      //TypeScript non-null assertion operator: 'value!'
      map((value) => value!),
      take(1),
      map((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/');
        }
        return authenticated;
      })
    );
  }
}
