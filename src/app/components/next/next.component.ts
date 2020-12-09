import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  base=['a', 'b', 'c'];
  constructor() { }

  ngOnInit(): void {
  }

  backSave(ee) {
    console.log('back', ee);
  }

}
