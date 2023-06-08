import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isUserSignedin: Observable<boolean> = this.authService.userSignedin$;

  public constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.checkAuth().subscribe();
  }
}
