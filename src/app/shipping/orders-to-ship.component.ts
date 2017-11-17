import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Order } from "../shared/order";


@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersToShipComponent implements OnInit {
  private orders: Array<Order>;

  constructor( private _http:Http) { }

  ngOnInit() {
    this.getOrdersReadyToShip()
    
     }
getOrdersReadyToShip(){
    this._http
      .get('/api/orders/readyToShip')
      .toPromise()
      .then(
        (res) => {
          console.log(res.json())
          this.orders = res.json()
        },
        (err) => {
          console.error(err)
        }
      )
  }
}
