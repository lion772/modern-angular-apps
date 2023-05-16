import { Component } from '@angular/core';
import { Image, ManageViewsService, View } from '../manage-views.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  public stats$: Observable<View[]> = this.manageViewService.getViewsData();
  public images$: Observable<Image[]> = this.manageViewService.getImagesData();

  public constructor(public manageViewService: ManageViewsService) {}
}
