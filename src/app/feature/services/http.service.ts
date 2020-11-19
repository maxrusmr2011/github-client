import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const REQ_URL = 'https://api.github.com/search/repositories';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public getList(query: string, page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('q', `${query} in:name`)
      .set('sort', 'star')
      .set('page', String(page))
      .set('per_page', '20');
    return this.http.get(REQ_URL, { params });
  }
}
