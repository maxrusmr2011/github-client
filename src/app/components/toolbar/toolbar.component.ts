import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  btnToggle = 'top';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changePage(e): void {
    this.router.navigate([e.value])
  }

}
