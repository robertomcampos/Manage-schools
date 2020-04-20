import { Injectable } from '@angular/core';
import { Class } from './class';
import { ApiClient, HandleApiError } from '../services/apiClient'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IPaging, IPagingParams } from '../model/paginate.model';
import { toParams } from '../services/toParams';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError) { }

  get(params: IPagingParams): Observable<IPaging<Class>> {
    const query = toParams(params);
    return this.apiClient.get(`/class?${query}`)
    .pipe(
      tap(_ => console.log('listing classes')),
      catchError(this.handleApiError.handleError<IPaging<Class>>('listing classess'))
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
