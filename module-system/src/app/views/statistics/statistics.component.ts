import { Component, Input } from '@angular/core';
import { View } from '../manage-views.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @Input() stats!: View[];
}
