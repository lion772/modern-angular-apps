import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, of } from 'rxjs';

interface WikiData {
  query: {
    search: Page[];
  };
}

export interface Page {
  ng: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string): Observable<Page[]> {
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

    return this.http.get<WikiData>(url, { params }).pipe(
      filter((res) => res !== null),
      map(({ query }) => query.search.map((page: Page) => page)),
      catchError((_) => of([]))
    );
  }
}
