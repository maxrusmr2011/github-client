import { Component, EventEmitter, AfterViewInit, OnInit, Output, OnChanges, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeType } from '../../model/store.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


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
// export class TopTableComponent implements OnInit, AfterViewInit {
export class TopTableComponent implements OnInit, OnChanges, AfterViewInit {
  data$: Observable<any[]>;

  displayedColumns: string[] = ['full_name', 'stargazers_count', 'fav'];
  dataSource: MatTableDataSource<any>;
  // dataSourceRaw: any[];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @Output() cardOne = new EventEmitter<any|null>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<storeType>) {
    console.log('t const');

  }

  ngOnInit(): void {
    // this.dataSource = [];
    console.log('t init', this.dataSource);
    this.data$ = this.store.select('dataBase');
    this.data$.subscribe((dd) => {
      console.log('t ok', dd);
      // this.dataSourceRaw = dd;
      this.dataSource = new MatTableDataSource<any>(dd);
      this.dataSource.paginator = this.paginator;
      console.log('count', this.dataSource.data);

    });
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    console.log('t view');
    this.dataSource.paginator = this.paginator;

  }

  ngOnChanges(): void {

    console.log('t change');
  }

  cardSelect(selCard: PeriodicElement|null): void {
    // console.log(selCard);
    this.cardOne.emit(selCard);
  }

}
