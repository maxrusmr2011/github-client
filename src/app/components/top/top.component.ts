import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../top-table/top-table.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  selectCard: PeriodicElement|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  showCard(e): void {
    // console.log('1', e);
    this.selectCard = e;
  }

}
