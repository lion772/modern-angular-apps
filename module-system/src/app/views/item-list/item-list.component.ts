import { Component } from '@angular/core';
import { Image, ManageViewsService } from '../manage-views.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  public images$: Observable<Image[]> = this.manageView.getImagesData();
  public constructor(public manageView: ManageViewsService) {}
  public items = [
    {
      image:
        'https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Couch',
      description: 'A Couch',
    },
    {
      image:
        'https://images.unsplash.com/photo-1612293682590-401de1c84f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Dresser',
      description: 'A Dresser',
    },
  ];
}
