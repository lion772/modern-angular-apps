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
  public dataList!: Data[];
  public pageSize = 1;
  public totalPages!: number;
  public itemToShow!: Data[];

  public constructor(public dataService: DataService) {}

  public ngOnInit(): void {
    this.data$.subscribe((items: Data[]) => {
      this.dataList = items;
      this.totalPages = Math.ceil(this.dataList.length / this.pageSize);
    });
  }

  public range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  public displayPage(pageNumber: number) {
    console.log(pageNumber);
    const startIndex = pageNumber * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.itemToShow = this.dataList.slice(startIndex, endIndex);
    console.log(this.itemToShow);
  }
}
