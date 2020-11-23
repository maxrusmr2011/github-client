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

  filter(e): void {
    if (e.code === 'Enter') {
      this.store.dispatch(wordChange({ word: e.target.value }));
    }
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        map(() => {
          this.store.dispatch(canReqChange({ canReq: false }));
        }),
        debounceTime(1000),
        map(() => this.inputElement.nativeElement.value))
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
