import { Component, OnInit } from '@angular/core';
// import { PeriodicElement } from '../top-table/top-table.component';
import { Store } from '@ngrx/store';
import { forkJoin, Observable, of } from 'rxjs';
import { HttpService } from 'src/app/feature/services/http.service';
import { storeType } from 'src/app/model/store.model';
// import { cutData } from 'src/app/utils/cutData';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  fav$: Observable<any[]>;
  listFav: string[];
  listFavCards: any[];

  // FAV: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
  constructor(private store: Store<storeType>, private http: HttpService) {
    this.fav$ = store.select('favorite');
    this.fav$.subscribe((dd) => {
        console.log('fav', dd);
        this.listFav = dd;
        this.listFavCards = [];
        const rawRequest = dd.map(item => this.http.getOne(item));
        forkJoin(rawRequest).subscribe((dataReq) => {
          console.log('list=', dataReq);
          this.listFavCards = dataReq.map((item) => this.http.cutData(item.items[0], this.listFav));
          console.log('new fav list', this.listFavCards);

        });
        // startFlow.pipe(map((item) => {});
        // this.listFavCards = res.map((item) => cutData(item));
      });

  }

  ngOnInit(): void {
  }

}
