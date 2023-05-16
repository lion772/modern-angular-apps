import { Component, Input } from '@angular/core';
import { Image } from '../manage-views.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() images: Image[] = [];
}
