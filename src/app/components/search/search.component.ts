import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../feature/services/http.service';
import { Store } from '@ngrx/store';
import { dataCreate } from '../../redux/dataReducer';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../redux/numReducer';
import { storeType } from '../../model/store.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  count$: Observable<number>;
  data$: Observable<any[]>;


  constructor(private http: HttpService, private store: Store<storeType>) {
    this.count$ = store.select('count');
    this.data$ = store.select('dataBase');
    // this.data$.subscribe((dd) => {
    //   console.log('ok', dd);
    // });
    this.count$.subscribe((dd) => {
      console.log(dd);
    });
  }

  ngOnInit(): void {
  }

  increments(a: number): void {
    this.store.dispatch(increment({ add: a }));
  }

  decrements(): void {
    this.store.dispatch(decrement());
  }


  startSearch(e): void {
    console.log(e.target.value);
    if (e.code === 'Enter') {
      this.http.getList(e.target.value, 1)
      .subscribe((datas) => {
        const { total_count, items } = datas;
        console.log('data', total_count, items);
        const data = items.map((item) => ({
          id: item.id,
          full_name: item.full_name,
          description: item.description,
          html_url: item.html_url,
          avatar_url: item.owner.avatar_url,
          login: item.owner.login,
          stargazers_count: item.stargazers_count,
        }));
        this.store.dispatch(dataCreate({ data }));
      });
    }
    this.increments(1);

  }

}
