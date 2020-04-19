import { Injectable } from '@angular/core';
import { School } from './school';
import { ApiClient, HandleApiError } from '../services/apiClient'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(
    private apiClient: ApiClient<School>,
    private handleApiError: HandleApiError) { }

  get(): Observable<School[]> {
    return this.apiClient.get('/school')
      .pipe(
        tap(_ => console.log('listing schools')),
        catchError(this.handleApiError.handleError<School[]>('listing schools'))
      );
  }

  create(data: School): Observable<School> {
    return this.apiClient.post('/school', data)
      .pipe(
        tap(_ => console.log('creating school')),
        catchError(this.handleApiError.handleError<School>('creating school'))
      );
  }
}
