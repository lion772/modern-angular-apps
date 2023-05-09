import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data$: Observable<Data[]> = this.dataService.getDataJson();
  public itemToShow!: Data;
  public totalPages!: number;
  public pageSize = 1;
  public currentPage = 0;
  public dataAvailable!: WritableSignal<Data[]>;
  public shouldDisplayData = false;

  public constructor(public dataService: DataService) {}

  public ngOnInit(): void {
    this.data$.subscribe((items: Data[]) => {
      this.dataAvailable = signal(items);
      this.totalPages = Math.ceil(items.length / this.pageSize);
    });
  }

  public range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  public setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  public onNextPage(): void {
    this.currentPage++;
    this.setCurrentPage(this.currentPage);
  }

  public onPreviousPage(): void {
    this.currentPage--;
    this.setCurrentPage(this.currentPage);
  }
}
