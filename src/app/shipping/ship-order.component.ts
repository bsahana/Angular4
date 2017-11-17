import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from "../shared/order";
import { OrderLine } from "../shared/order-line";
import { Customer } from "../shared/customer";
import { Product } from "../shared/product";

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles: [`
    .big-checkbox {
      transform: scale(2);
    }
    
    .green-btn {
      background-color:green;
      color: white;
    }
    
    .product-img {
      border: 5px solid green;
      border-radius: 25px;
      padding: 10px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ShipOrderComponent implements OnInit {
  private order: Order;

  constructor(private _route: ActivatedRoute, private _http:Http) { }

  ngOnInit() {
    this.order = new Order();
    this.order.orderID = 27;
    this.order.orderDate = new Date();
    this.order.shipVia = 1;
    this.order.shipping = 10;
    this.order.shipName = "Ororo Monroe";
    this.order.shipAddress = "777 Placeholder Pl";
    this.order.shipCity = "Birnin Zana";
    this.order.shipRegion = "RG";
    this.order.shipCountry = "Wakanda";
    this.order.shipPostalCode = "5T4N-L33";
    this.order.status = 0;
    this.order.lines = [];
    const line1 = new OrderLine();
    line1.locationID = "02B1C";
    line1.price = 30.00;
    line1.productID = 55;
    line1.quantity = 2;
    line1.product = new Product();
    line1.product.name = "Oreos";
    line1.product.imageUrl = "/assets/images/productImages/37.jpg";
    const line2 = new OrderLine();
    // line2.locationID = "05A3A";
    line2.price = 30.00;
    line2.productID = 45;
    line2.quantity = 7;
    line2.product = new Product();
    line2.product.name = "Peanuts";
    line2.product.imageUrl = "/assets/images/productImages/67.jpg";
    this.order.lines.push(line1);
    this.order.lines.push(line2);
    
    this.order.orderID = this._route.snapshot.params["orderID"];
  }
  
  isReadyToShip(order){
    // order.lines.forEach(line => line.picked=true);
    return order.lines.every(line => line.picked);
  }
  
  getBestLocation(orderLine) {
    this._http
      .get(`/api/locations/forProduct/${orderLine.productID}`)
      .subscribe(
        res => {orderLine.locationID = res.json()[0].locationID,
        err => {console.error(err)}
      });
  }
  
  markAsShipped(order){
    order.status=1;
    this._http
      .patch(`/api/orders/${order.orderID}/MarkAsShipped`, {})
      .subscribe(
        res => {console.log(res)},
        err => {console.error(err)}
      );
  }
  
  markWithProblem(order){
    order.status=2;
    this._http
      .patch(`/api/orders/${order.orderID}/MarkAsProblem`, {})
      .subscribe(
        res => {console.log(res)},
        err => {console.error(err)}
      );
  }
}
