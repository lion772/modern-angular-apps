import { Component, inject } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public term = '';
  private wikipediaService = inject(WikipediaService);
  public pages$!: Observable<any>;

  public onTerm(term: string) {
    this.term = term;
    this.pages$ = this.wikipediaService.search(this.term);
  }
}
