import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface View {
  id: string;
  value: number;
  label: string;
}

export interface Image {
  id: string;
  image: string;
  title: string;
  description: string;
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
            id: view.id,
            value: view.value,
            label: view.label,
          };
        });
      })
    );
  }

  public getImagesData(): Observable<Image[]> {
    return this.http.get<any>('assets/images.json').pipe(
      map(({ images }) => {
        return images.map((image: Image) => {
          return {
            id: image.id,
            image: image.image,
            title: image.title,
            description: image.description,
          };
        });
      })
    );
  }
}
