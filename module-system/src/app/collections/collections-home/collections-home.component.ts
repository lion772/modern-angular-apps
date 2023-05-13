import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  public data$: Observable<User[]> = this.dataService.getData();
  public dataList: User[] = [];
  public constructor(public dataService: DataService) {}
}
