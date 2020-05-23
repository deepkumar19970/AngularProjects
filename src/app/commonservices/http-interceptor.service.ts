import { Injectable } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map , catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    // if (!request.headers.has('Content-Type')) {
    //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }
    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', 'http://localhost:8080') });
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') });
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type') });
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'true') });



    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }, catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        alert(data);
        return throwError(error);
      })));

  }
}
