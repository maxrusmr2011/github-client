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
      .set('sort', 'stars')
      .set('page', String(page))
      .set('per_page', '20');
    return this.http.get(REQ_URL, { params });
  }

  public getOne(repo: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('q', `repo:${repo}`);
    return this.http.get(REQ_URL, { params });
  }

  cutData(item, listFav): any {
    return ({
      id: String(item.id),
      full_name: item.full_name,
      description: item.description,
      html_url: item.html_url,
      avatar_url: item.owner.avatar_url,
      login: item.owner.login,
      owner_html_url: item.owner.html_url,
      stargazers_count: item.stargazers_count,
      fav: listFav.includes((item.full_name)),
    });
  }

  changeData(item, listFav): any {
    return ({
      ...item,
      fav: listFav.includes((item.full_name)),
    });
  }
}
