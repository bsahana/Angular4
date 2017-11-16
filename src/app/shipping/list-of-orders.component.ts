import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'nw-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListOfOrdersComponent implements OnInit {
  @Input()
  private orders;
  
  constructor() { }

  ngOnInit() {
  }

}
