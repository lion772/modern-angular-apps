import { Component, Input } from '@angular/core';
import { Page } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent {
  @Input('pageList') pages: Page[] = [];
}
