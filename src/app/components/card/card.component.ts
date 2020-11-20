import { Component, Input, OnInit, OnChanges } from '@angular/core';
// import { PeriodicElement } from '../top-table/top-table.component';
import { Store } from '@ngrx/store';
import { favoriteAdd, favoriteDel } from '../../redux/favoriteReducer';
import { storeType } from 'src/app/model/store.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() currentCard: any;
  fav: boolean;
  constructor(private store: Store<storeType>) {
  }

  ngOnInit(): void {
    this.fav = this.currentCard.fav;
    console.log('init', this.fav);

  }
  ngOnChanges(): void {
    this.fav = this.currentCard.fav;
    console.log('change', this.fav);

  }
  clickStar(): void {
    this.fav = !this.fav;
    if (this.fav) {
      this.addFav();
    } else {
      this.delFav();
    }

  }

  addFav(): void {
    this.store.dispatch(favoriteAdd({ full_name: this.currentCard.full_name }));
  }
  delFav(): void {
    this.store.dispatch(favoriteDel({ full_name: this.currentCard.full_name }));
  }

}
