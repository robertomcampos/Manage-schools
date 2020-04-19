import { Injectable } from '@angular/core';
import { Class } from './class';
import { ApiClient, HandleApiError } from '../services/apiClient'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(
    private apiClient: ApiClient<Class>,
    private handleApiError: HandleApiError) { }

  get(): Observable<Class[]> {
    return this.apiClient.get('/class')
    .pipe(
      tap(_ => console.log('listing classes')),
      catchError(this.handleApiError.handleError<Class[]>('listing classess'))
    );
  }

  create(data: Class): Observable<Class> {
    return this.apiClient.post('/class', data)
      .pipe(
        tap(_ => console.log('creating a class')),
        catchError(this.handleApiError.handleError<Class>('creating a class'))
      );
  }
}
