import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeType } from 'src/app/model/store.model';
import { favoriteGet } from 'src/app/redux/favoriteReducer';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  fav$: Observable<any[]>;
  listFav: string[];
  countFav: number;
  @Input() title: string;
  btnToggle = 'top';
  constructor(private router: Router, private store: Store<storeType>) {

    this.getFav();
    this.fav$ = store.select('favorite');
    this.fav$.subscribe((dd) => {
        console.log('ok fav', dd);
        this.listFav = dd;
        this.countFav = dd.length;
        this.save();
      });
    }

    ngOnInit(): void {
  }

  changePage(e): void {
    this.router.navigate([e.value])
  }

save(): void {
  localStorage.setItem('favorites', JSON.stringify(this.listFav));
}

getFav(): void {
  const get = localStorage.getItem('favorites');
  try {
    // const list = []; // delete
    const list = JSON.parse(get);

    this.store.dispatch(favoriteGet({ list }));
  } catch(e) {
    this.store.dispatch(favoriteGet({ list: [] }));
  }
}
}
