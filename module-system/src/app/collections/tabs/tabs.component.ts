import { Component } from '@angular/core';
import { DataService, Profile } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  public currentIndex = 0;
  public profileInfo$: Observable<Profile> =
    this.dataService.getProfileInfomation();

  public constructor(public dataService: DataService) {}
}
