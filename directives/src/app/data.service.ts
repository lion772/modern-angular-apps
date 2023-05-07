import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data$ = this.http.get<Data[]>('/assets/data.json');
  public constructor(private http: HttpClient) {}

  public getDataJson(): Observable<Data[]> {
    return this.data$;
  }
}
