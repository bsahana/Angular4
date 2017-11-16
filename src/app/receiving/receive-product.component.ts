import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from "../shared/product";

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReceiveProductComponent implements OnInit {
  private showForm: boolean;
  private trackingNumber: string;
  private receivedProducts;
  private productID;
  private quantity;
  constructor() { }

  ngOnInit() {
    this.receivedProducts = [];
  }
  
  saveTrackingNumber() {
    this.showForm = true;
    console.log(this.trackingNumber);
  }
  
  receiveProduct(productID, quantity) {
    this.receivedProducts.push({productID, quantity});
    this.productID = "";
    this.quantity = "";
    console.log(this.receivedProducts);
  }
  
  finishedReceiving(){
    console.log("finished..")
  }
}
