import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { FunctionService } from 'src/app/feature/services/function.service';
import { FunctionService } from '@service/function.service';
import { storeType } from 'src/app/model/store.model';
import {FormControl} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

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
  isOpen = false;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  constructor(private fun: FunctionService, private router: Router, private store: Store<storeType>) {
    this.router.navigate([this.btnToggle]);
    this.fav$ = this.store.select('favorite');
    this.fav$.subscribe((getFav) => {
        this.listFav = getFav;
        if (!this.listFav.length) {
          this.router.navigate(['top']);
          this.btnToggle = 'top';
        }
      });
    }

  ngOnInit(): void {
    this.fun.firstRequest();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  changePage(e): void {
    this.btnToggle = e.value;
    this.router.navigate([e.value]);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
