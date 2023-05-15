import { Component } from '@angular/core';
import { DataService, Header, User } from '../data.service';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  public classNames = 'striped celled';
  public tabList = ['', 'companies', 'partners'];
  public mainRouteLabel = 'Biography';

  public data$: Observable<User[]> = this.dataService.getData();
  public headers$: Observable<Header[]> = this.dataService.getHeaders();
  public vm$ = combineLatest([this.data$, this.headers$]).pipe(
    map(([data, headers]) => ({ data, headers }))
  );

  public constructor(public dataService: DataService) {}
}
