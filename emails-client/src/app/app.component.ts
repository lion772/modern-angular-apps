import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './simple.reducer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isUserSignedin!: Observable<boolean | null>;
  public redirectTo = '';
  public message$!: Observable<string>;

  public constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.manageUserAuthentication();
  }

  private manageUserAuthentication() {
    this.authService.checkAuth().subscribe();
    this.isUserSignedin = this.authService.getUserAuthentication$;
    this.message$ = this.store.select('message');
    if (this.isUserSignedin) {
      //this.router.navigate(['/inbox']);
    }
  }
}
