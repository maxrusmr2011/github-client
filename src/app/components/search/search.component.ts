import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../feature/services/http.service';
import { Store } from '@ngrx/store';
import { dataAdd, dataCreate } from '../../redux/dataReducer';
import { Observable } from 'rxjs';
// import { increment, decrement, reset } from '../../redux/numReducer';
import { storeType } from '../../model/store.model';
import { pageFirst, pageNext, totalChange, wordChange } from 'src/app/redux/pageReducer';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // count$: Observable<number>;
  data$: Observable<any[]>;
  page$: Observable<any>;
  fav$: Observable<any[]>;
  listFav: string[];
  dataFresh: any[];

  word: string;
  page: number;
  total: number;


  constructor(private http: HttpService, private store: Store<storeType>) {
    // this.count$ = store.select('count');
    this.data$ = store.select('dataBase');
    this.data$.subscribe((dd) => {
      console.log('fav in t', dd);
      this.dataFresh = dd;
    });

    this.page$ = store.select('page');
    this.page$.subscribe((dd) => {
      console.log('search ok', dd);
      this.page = dd.page;
      this.total = dd.total;
      this.word = dd.word;
    });

    this.fav$ = store.select('favorite');
    this.fav$.subscribe((dd) => {
        console.log('fav in t', dd);
        this.listFav = dd;
        if (this.dataFresh.length) {
          const data = this.dataFresh.map((item) => this.http.changeData(item, this.listFav));
          this.store.dispatch(dataCreate({ data }));
        }
    });
  }

  ngOnInit(): void {
  }

  startSearch(e): void {
    console.log(e.target.value);
    if (e.code === 'Enter') {
      this.store.dispatch(pageFirst());
      this.store.dispatch(wordChange({ word: e.target.value }));

      console.log('check');

      this.http.getList(e.target.value, 1)
      .subscribe((dataGet) => {
        const { total_count, items } = dataGet;

        this.store.dispatch(totalChange({ total: total_count }));
        console.log('data', total_count, items);
        const data = items.map((item) => this.http.cutData(item, this.listFav));
        this.store.dispatch(dataCreate({ data }));

      });
    }

  }

  nextSearch(): void {
        this.store.dispatch(pageNext());

        console.log('check');

        this.http.getList(this.word, this.page)
        .subscribe((dataGet) => {
          const { total_count, items } = dataGet;
          console.log('data next', total_count, items);

          const data = items.map((item) => this.http.cutData(item, this.listFav));
          this.store.dispatch(dataAdd({ data }));

        });

  }

}
