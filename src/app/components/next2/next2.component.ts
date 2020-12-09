import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next2',
  templateUrl: './next2.component.html',
  styleUrls: ['./next2.component.scss']
})
export class Next2Component implements OnInit {
  base2=['aa', 'bb', 'cc'];

  constructor() { }

  ngOnInit(): void {
  }

  backSave2(ee) {
    console.log('back2', ee);
  }

}
