import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject, map } from 'rxjs';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './simple.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isUserSignedin: BehaviorSubject<boolean | null> =
    this.authService.userSignedin$;
  
  public message$!: Observable<String>;
  

  public constructor(private authService: AuthService, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.authService.checkAuth().subscribe();
    this.message$ = this.store.select("message");
  }
}
