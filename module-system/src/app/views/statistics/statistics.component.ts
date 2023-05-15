import { Component } from '@angular/core';
import { ManageViewsService, View } from '../manage-views.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  public stats$: Observable<View[]> = this.manageViewService.getViewsData();
  public constructor(public manageViewService: ManageViewsService) {}

}
