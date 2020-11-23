import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeType } from '../../model/store.model';
import { canReqChange, wordChange } from 'src/app/redux/pageReducer';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement') public inputElement: ElementRef;

  constructor(private store: Store<storeType>) { }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        map((e: any) => {
          this.store.dispatch(canReqChange({ canReq: false }));
          return e.currentTarget.value;
        }),
        debounceTime(1000),
      )
      .subscribe( (word) => {
        if (!word) {
          this.store.dispatch(wordChange({ word: '' }));
        } else {
          this.store.dispatch(wordChange({ word }));
        }
        this.store.dispatch(canReqChange({ canReq: true }));
      });
  }
}
