import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<{username: string}>,
    next: HttpHandler,
  ): Observable<HttpEvent<string>> {
    const modifiedReq = req.clone({ withCredentials: true });
    return next.handle(modifiedReq);
  }
}
