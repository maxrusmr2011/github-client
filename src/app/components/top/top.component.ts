import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  selectCard: any|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  showCard(e): void {
    this.selectCard = e;
  }

}
