import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[nw-order-line]',
  templateUrl: './order-line.component.html',
  styleUrls: ['./order-line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderLineComponent implements OnInit {
  @Input()
  private line;
  
  @Output()
  getLocationEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  getBestLocation(line) {
    this.getLocationEvent.emit(line)
  }

}
