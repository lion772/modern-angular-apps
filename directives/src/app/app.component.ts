import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Data, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data$: Observable<Data[]> = this.dataService.getDataJson();
  public constructor(public dataService: DataService) {}

  public ngOnInit(): void {}
}
