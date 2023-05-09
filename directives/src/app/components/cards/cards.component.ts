import { Component, Input } from '@angular/core';
import { Data } from '../../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() data!: Data;
}
