
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {providedIn: 'root'} )
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
    const clones = req.clone({
      headers: req.headers.append( 'Access-Control-Allow-Origin','*')
    })
    return next.handle(clones);
  }
}