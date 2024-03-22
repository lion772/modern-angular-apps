import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { take, skipWhile, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canLoad() {
    return this.checkAuth();
  }

  private checkAuth() {
    return this.authService.getUserAuthentication$.pipe(
      //Skip null values, otherwise when /inbox is hit and the page is reloaded, the page will be redirected to /signin as the first
      // value will be null.
      skipWhile((val) => val === null),
      take(1),
      map((value) => !!value),
      tap((authenticated) => {
        //perform a side-effect with tap without modifying the stream's elements.
        if (!authenticated) {
          this.router.navigateByUrl('/');
        }
      }),
    );
  }

 
}
