import { Injectable } from '@angular/core';
import {TokenCookieService} from '../auth/token-cookie.service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {

  constructor(private tokenCookieService: TokenCookieService,
              private httpClient: HttpClient){
  }
  public setHeaders(headers?: any): HttpHeaders{
    const token = 'Bearer' + this.tokenCookieService.getToken();
    let httpHeaders;
    if (token) {
      try {
        // @ts-ignore
        httpHeaders = new HttpHeaders(_.assign({
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: token
        }, headers));
      }catch (err) {
        console.log(err.toString());
      }
    }
    // @ts-ignore
    return httpHeaders;
  }
  public setHeadersFormData(headers?: any): HttpHeaders{
    const token = 'Bearer' + this.tokenCookieService.getToken();
    let httpHeaders;
    if (token){
      try {
        // @ts-ignore
        httpHeaders = new HttpHeaders(_.assign({
          Authorization: token
        }, headers));
      }catch (err) {
        console.log(err.toString());
      }
    }
    // @ts-ignore
    return httpHeaders;
  }
  public setUrlEncodedHeaders(headers?: any): HttpHeaders{
    const token = '';
    let httpHeaders;
    if (token){
      try{
        // @ts-ignore
        httpHeaders = new HttpHeaders(_.assign({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token
        }, headers));
      }catch (err) {
        console.log(err.toString());
      }
    }
    // @ts-ignore
    return httpHeaders;
  }
  // tslint:disable-next-line:typedef
  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof  ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    } else {
      return throwError(error);
    }
    return  throwError('Something went wrong!');
  }
  public post(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setHeaders(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public postFormData(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setHeadersFormData(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public postUrlEncoded(path: string, body: any, customHeaders?: any): Observable<HttpResponse<any>>{
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setUrlEncodedHeaders(customHeaders),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public get(path: string, options?: any, params?: HttpParams): Observable<any>{
    return this.httpClient.get(
      path,
      {
        headers: this.setHeaders(options),
        params,
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public put(path: string, body?: any): Observable<any>{
    return this.httpClient.put(
      path, body,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public putFormData(path: string, body?: any): Observable<any>{
    return this.httpClient.put(
      path, body,
      {
        headers: this.setHeadersFormData(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public delete(path: string): Observable<any>{
    return this.httpClient.delete(
      path,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public deleteBody(path: string, bodyDelete?: any): Observable<any>{
    const option = {
      headers: this.setHeaders(),
      body: bodyDelete
    };
    return this.httpClient.delete(
      path, option).pipe( catchError(this.errorHandler));
  }
}
