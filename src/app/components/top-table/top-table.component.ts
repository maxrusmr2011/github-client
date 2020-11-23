import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { favoriteToggle } from 'src/app/redux/favoriteReducer';
import { storeType } from '../../model/store.model';
import {MatTableDataSource} from '@angular/material/table';
import { FunctionService } from 'src/app/feature/services/function.service';

@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.scss']
})
export class TopTableComponent implements OnInit {
  data$: Observable<any[]>;
  page$: Observable<any>;
  canScroll: boolean;

  displayedColumns: string[] = ['num', 'full_name', 'stargazers_count', 'fav'];
  dataSource: MatTableDataSource<any>;
  @Output() cardOne = new EventEmitter<any|null>();

  constructor(private fun: FunctionService, private store: Store<storeType>) { }

  ngOnInit(): void {
    this.data$ = this.store.select('dataBase');
    this.data$.subscribe((getData) => {
      this.dataSource = new MatTableDataSource<any>(getData);
    });

    this.page$ = this.store.select('page');
    this.page$.subscribe((getPage) => {
      this.canScroll = getPage.canReq;
      this.dataSource.filter = getPage.word.trim().toLowerCase();
    });
  }

  cardSelect(selCard: any|null): void {
    this.cardOne.emit(selCard);
  }

  clickStar(card): void {
    this.store.dispatch(favoriteToggle({ card }));
  }

  toScroll(e): void {
    if (this.canScroll && e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
      this.fun.nextRequest();
    }
  }
}
