import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, findIndex, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    let url = 'https://en.wikipedia.org/w/api.php';

    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      limit: 'search',
      srsearch: term,
      origin: '*',
    };
    /* Object.keys(params).forEach(
      (key) => (url += '?' + key + '=' + (params as any)[key])
    );
    console.log(`${url}`); */

    return this.http.get<any>(url, { params }).pipe(
      filter((res) => res !== null),
      map(({ query }) => query.search.map((page: any) => page)),
      catchError((res) => of([]))
    );
  }
}
