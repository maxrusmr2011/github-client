import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeType } from 'src/app/model/store.model';
import { dataAdd, dataCreate } from 'src/app/redux/dataReducer';
import { favoriteGet } from 'src/app/redux/favoriteReducer';
import { pageFirst, pageNext, totalChange } from 'src/app/redux/pageReducer';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private http: HttpService, private store: Store<storeType>) {
    this.data$ = this.store.select('dataBase');
    this.data$.subscribe((getData) => {
      this.data = getData;
    });

    this.page$ = this.store.select('page');
    this.page$.subscribe((getPage) => {
      this.page = getPage;
    });

    this.fav$ = this.store.select('favorite');
    this.fav$.subscribe((getFav) => {
      this.fav = getFav;
      const data = this.data.map((item) => this.changeData(item));
      this.store.dispatch(dataCreate({ data }));
      this.save();
    });
  }
  fav$: Observable<any[]>;
  data$: Observable<any[]>;
  page$: Observable<any>;
  fav: any[];
  data: any[];
  page: any;

  static getFav(): any[] {
    const get = localStorage.getItem('favorites');
    let result;
    try {
      result = JSON.parse(get);
    } catch(e) {
      result = [];
    }
    return result;
  }
  firstRequest(): void {
    this.store.dispatch(pageFirst());
    this.http.getList(this.page.page)
      .subscribe((dataGet) => {
        const { total_count, items } = dataGet;
        this.store.dispatch(totalChange({ total: total_count }));
        const data = items.map((item) => this.cutData(item));
        this.store.dispatch(dataCreate({ data }));
      });
  }

  nextRequest(): void {
    this.store.dispatch(pageNext());
    this.http.getList(this.page.page)
    .subscribe((dataGet) => {
      const { items } = dataGet;
      const data = items.map((item) => this.cutData(item));
      this.store.dispatch(dataAdd({ data }));
    });
  }

  changeData(item): any {
    return ({
      ...item,
      fav: !!this.fav.find((favCard) => item.id === favCard.id),
    });
  }

  cutData(item): any {
    return ({
      id: item.id,
      full_name: item.full_name,
      description: item.description,
      html_url: item.html_url,
      avatar_url: item.owner.avatar_url,
      login: item.owner.login,
      owner_html_url: item.owner.html_url,
      stargazers_count: item.stargazers_count,
      fav: !!this.fav.find((favCard) => favCard.id === item.id),
    });
  }

save(): void {
  localStorage.setItem('favorites', JSON.stringify(this.fav));
}
}
