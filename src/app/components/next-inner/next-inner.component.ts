import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-next-inner',
  templateUrl: './next-inner.component.html',
  styleUrls: ['./next-inner.component.scss']
})
export class NextInnerComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() data?: string[];
  @Output() save? = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  toSave() {
    console.log(this.input.nativeElement.value);
    this.data[0] = this.input.nativeElement.value;
    console.log(this.data);
    this.save.emit(this.data);
  }

}
