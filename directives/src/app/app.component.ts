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
  public totalRangePages!: number[];
  public actualRangePages!: number[];

  public pageSize = 1;
  public currentPage = 0;
  public pagesToShow = 3;
  public dataAvailable!: WritableSignal<Data[]>;
  public shouldDisplayData = false;

  public constructor(public dataService: DataService) {}

  public ngOnInit(): void {
    this.data$.subscribe((items: Data[]) => {
      this.dataAvailable = signal(items);
      this.totalPages = Math.ceil(items.length / this.pageSize); //get hold of total pages to be displayed
      this.totalRangePages = this.range(this.totalPages); //create a range out of total pages number
      this.actualRangePages = this.totalRangePages.filter(
        //start off with a default range list from 0 to 3
        (el) => el < this.pagesToShow
      );
    });
  }

  public range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  public setCurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  public onNextPage(): void {
    if (
      this.currentPage === this.pagesToShow - 1 &&
      this.currentPage < this.totalPages
    ) {
      this.pagesToShow += 3;
      this.actualRangePages = this.totalRangePages.filter(
        (el) => el > this.currentPage
      );
    }
    this.currentPage++;
    this.setCurrentPage(this.currentPage);
  }

  public onPreviousPage(): void {
    if (this.currentPage === this.actualRangePages[0] && this.currentPage > 0) {
      this.pagesToShow -= 3;
      this.actualRangePages = this.totalRangePages.filter(
        (el) => el < this.currentPage
      );
    }
    this.currentPage--;
    this.setCurrentPage(this.currentPage);
  }
}
