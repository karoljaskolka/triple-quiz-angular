import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationDto } from '../dtos/pagination';
import { SuccessDto } from '../dtos/success';
import { uuid } from '../types/uuid';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getSingleResource<T>(resource: string, id: uuid): Observable<T> {
    return this.http.get<T>(this.apiUrl + `/api/${resource}/${id}`).pipe(
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return throwError(() => err);
      })
    );
  }

  getResources<T>(
    resource: string,
    query: { [key: string]: string } | null = null
  ): Observable<PaginationDto<T>> {
    let params: HttpParams = new HttpParams();

    if (query) {
      Object.keys(query).forEach((key) => {
        params = params.append(key, query[key]);
      });
    }

    return this.http
      .get<PaginationDto<T>>(this.apiUrl + `/api/${resource}`, {
        params,
      })
      .pipe(
        catchError((err) => {
          this.notificationService.error(err.error.error_message);
          return throwError(() => err);
        })
      );
  }

  postResource<T>(resource: string, data: Partial<T>): Observable<T> {
    return this.http.post<T>(this.apiUrl + `/api/${resource}`, data).pipe(
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return throwError(() => err);
      })
    );
  }

  putResource<T>(resource: string, id: uuid, data: Partial<T>): Observable<T> {
    return this.http.put<T>(this.apiUrl + `/api/${resource}/${id}`, data).pipe(
      catchError((err) => {
        this.notificationService.error(err.error.error_message);
        return throwError(() => err);
      })
    );
  }

  deleteResource(resource: string, id: uuid): Observable<SuccessDto> {
    return this.http
      .delete<SuccessDto>(this.apiUrl + `/api/${resource}/${id}`)
      .pipe(
        catchError((err) => {
          this.notificationService.error(err.error.error_message);
          return throwError(() => err);
        })
      );
  }
}
