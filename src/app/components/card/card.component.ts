import { Component, Input, OnInit } from '@angular/core';
import { PeriodicElement } from '../top-table/top-table.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() currentCard: PeriodicElement;
  constructor() { }

  ngOnInit(): void {
  }

}
