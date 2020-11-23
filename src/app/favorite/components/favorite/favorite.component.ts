import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeType } from 'src/app/model/store.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  fav$: Observable<any[]>;
  listFav: any[];

  constructor(private store: Store<storeType>) {
    this.fav$ = this.store.select('favorite');
    this.fav$.subscribe((getListFav) => {
      this.listFav = getListFav;
    });
  }

  ngOnInit(): void {
  }
}
