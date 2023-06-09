import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
})
export class SignoutComponent implements OnInit {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.signOut().subscribe({
      next: () => setTimeout(() => this.router.navigateByUrl('/'), 1000),
    });
  }
}
