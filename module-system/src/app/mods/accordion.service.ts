import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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
      .get<{ accordions: Accordion[] }>('assets/accordion-data.json')
      .pipe(
        map(({ accordions }) =>
          accordions.map((accordion: Accordion) => ({
            title: accordion.title,
            description: accordion.description,
          }))
        )
      );
  }
}
