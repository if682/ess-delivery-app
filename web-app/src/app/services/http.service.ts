import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs';
import { BaseService } from './base.service';

export class Response {
  msg: string = '';
  msgCode: string = '';
  code: number = -1;
  data: any;

  constructor(data?: Partial<Response>) {
    Object.assign(this, data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class HttpService extends BaseService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    super();
    this.baseUrl = environment.apiUrl ?? '';
  }

  private getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return { headers };
  }

  get(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`, this.getHeaders()).pipe(
      map((response) => new Response(response)),
      catchError(this.handleError<Response>('get', new Response()))
    );
  }

  post(url: string, data: any) {
    return this.http
      .post<any>(`${this.baseUrl}${url}`, data, this.getHeaders())
      .pipe(
        map((response) => new Response(response)),
        catchError(this.handleError<Response>('post', new Response()))
      );
  }

  put(url: string, data: any) {
    return this.http
      .put<any>(`${this.baseUrl}${url}`, data, this.getHeaders())
      .pipe(
        map((response) => new Response(response)),
        catchError(this.handleError<Response>('put', new Response()))
      );
  }

  delete(url: string) {
    return this.http
      .delete<any>(`${this.baseUrl}${url}`, this.getHeaders())
      .pipe(
        map((response) => new Response(response)),
        catchError(this.handleError<Response>('delete', new Response()))
      );
  }
}
