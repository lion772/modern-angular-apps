import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface View {
  value: number;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class ManageViewsService {
  public constructor(private http: HttpClient) {}

  public getViewsData(): Observable<View[]> {
    return this.http.get<any>('assets/views-info.json').pipe(
      map(({ views }) => {
        return views.map((view: View) => {
          return {
            value: view.value,
            label: view.label,
          };
        });
      })
    );
  }
}
