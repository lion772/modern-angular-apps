import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items = ['elements', 'collections', 'mods', 'views'];
  public currentIndex = 0;
}
