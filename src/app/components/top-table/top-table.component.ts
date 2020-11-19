import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeType } from '../../model/store.model';



export interface PeriodicElement {
  name?: string;
  position?: number;
  weight?: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079 },
  {position: 2, name: 'Helium', weight: 4.0026 },
  {position: 3, name: 'Lithium', weight: 6.941 },
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.999},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 10, name: 'Neon', weight: 20.1797},
];
@Component({
  selector: 'app-top-table',
  templateUrl: './top-table.component.html',
  styleUrls: ['./top-table.component.scss']
})
export class TopTableComponent implements OnInit {
  data$: Observable<any[]>;

  constructor(private store: Store<storeType>) {
    this.data$ = store.select('dataBase');
    this.data$.subscribe((dd) => {
      console.log('ok', dd);
    });
   }

  displayedColumns: string[] = ['full_name', 'stargazers_count', 'fav'];
  dataSource = ELEMENT_DATA;
  // @Input() selectCard: PeriodicElement|null;
  @Output() card = new EventEmitter<PeriodicElement|null>();

  ngOnInit(): void {
  }
  cardChange(selCard: PeriodicElement|null): void {
    console.log(selCard);

    this.card.emit(selCard);
  }

}
