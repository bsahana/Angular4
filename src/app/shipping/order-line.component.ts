import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: '[nw-order-line]',
  templateUrl: './order-line.component.html',
  styleUrls: ['./order-line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderLineComponent implements OnInit {
  @Input()
  private line;
  
  constructor() { }

  ngOnInit() {
  }

}
