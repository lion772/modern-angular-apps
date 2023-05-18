import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, of } from 'rxjs';

export interface Accordion {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  constructor(private http: HttpClient) {}

  public getAccordionData(): Observable<Accordion[]> {
    return this.http
      .get<{ accordions: Accordion[] | null }>('assets/accordion-data.json')
      .pipe(
        filter((res) => res !== null),
        map((res: any) =>
          res.accordions.map((accordion: Accordion) => ({
            title: accordion.title,
            description: accordion.description,
          }))
        ),
        catchError((error) => of([]))
      );
  }
}
