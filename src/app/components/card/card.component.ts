import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { favoriteToggle } from '../../redux/favoriteReducer';
import { storeType } from 'src/app/model/store.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() currentCard: any;
  @Output() hideCard = new EventEmitter();

  isFav: boolean;
  fav$: Observable<any[]>;

  constructor(private store: Store<storeType>) {
    this.fav$ = store.select('favorite');
  }

  ngOnInit(): void {
    this.isFav = this.currentCard.fav;
    this.fav$.subscribe((dd) => {
      this.isFav = !!dd.find((item) => item.id === this.currentCard.id);
    });
  }

  clickStar(): void {
    this.store.dispatch(favoriteToggle({ card: { ...this.currentCard, fav: this.isFav } }));
  }

  clickCancel(): void {
    this.hideCard.emit();
  }
}
