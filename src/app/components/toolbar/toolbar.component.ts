import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FunctionService } from 'src/app/feature/services/function.service';
import { storeType } from 'src/app/model/store.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  fav$: Observable<any[]>;
  listFav: any[];
  @Input() title: string;
  btnToggle = 'top';

  constructor(private fun: FunctionService, private router: Router, private store: Store<storeType>) {
    this.router.navigate([this.btnToggle]);
    this.fav$ = this.store.select('favorite');
    this.fav$.subscribe((dd) => {
        this.listFav = dd;
      });
    }

  ngOnInit(): void {
    this.fun.firstRequest();
  }

  changePage(e): void {
    this.router.navigate([e.value]);
  }

}
