import { Component, OnInit } from '@angular/core';
// import {routerLink} from ''
// import {MatButtonToggleAppearance} from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  btnToggle = 'top';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changePage(e): void {
    this.router.navigate([e.value])
  }

}
