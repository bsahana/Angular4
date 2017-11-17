import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from '../shared/order';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  private orders: Array<Order>;

  constructor(private _http:Http) { }

  ngOnInit() {
    this.orders = [];
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
