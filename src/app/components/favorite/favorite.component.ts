import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../top-table/top-table.component';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  FAV: PeriodicElement[] = [{position:1}, {position:2}, {position:3}];
  constructor() { }

  ngOnInit(): void {
  }

}
