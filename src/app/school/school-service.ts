import { Injectable } from '@angular/core';
import { School } from './school';
import { ApiClient, HandleApiError } from '../services/apiClient'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IPaging, IPagingParams } from '../model/paginate.model';
import { toParams } from '../services/toParams';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError) { }

  getAll(): Observable<School[]> {
    return this.apiClient.get(`/school/all`)
      .pipe(
        tap(_ => console.log('listing classes')),
        catchError(this.handleApiError.handleError<IPaging<School[]>>('listing classess'))
      );
  }

  get(params: IPagingParams): Observable<IPaging<School>> {
    const query = toParams(params);
    return this.apiClient.get(`/school?${query}`)
      .pipe(
        tap(_ => console.log('listing classes')),
        catchError(this.handleApiError.handleError<IPaging<School>>('listing classess'))
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
