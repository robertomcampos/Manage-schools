import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Constants from '../constants';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

@Injectable({
    providedIn: 'root',
  })
export class ApiClient<T> {

    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<T[]> {
        return this.httpClient.get<T[]>(`${Constants.API_BASE_URL}${url}`);
    }

    post(url: string, data: T): Observable<T> {
        return this.httpClient.post<T>(`${Constants.API_BASE_URL}${url}`, data, httpOptions);
    }
}

@Injectable({
    providedIn: 'root',
  })
export class HandleApiError {
    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.error(message);
    }
}

