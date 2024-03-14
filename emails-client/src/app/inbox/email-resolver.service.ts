import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Email } from './email';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email | null> {
  constructor(
    private emailService: EmailService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Email | Observable<Email | null> | Promise<Email | null> {
    return this.emailService.getEmailById(route.params['emailId']).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/notfound');
        return EMPTY;
      }),
      map((res) => res),
    );
  }
}
