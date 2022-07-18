import { Component, OnInit } from '@angular/core';
import { ProductcardService } from '../services/productcard.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Item[];
  totalPrice:number = 0;
  constructor(private cartService:ProductcardService) {  this.cartItems = [];}

  ngOnInit(): void {
    this.cartItems = this.cartService.getAllItems();
  }
  removeItem(indexItem:number) {
    this.totalPrice -= this.cartItems[indexItem].price * this.cartItems[indexItem].quantity;

    this.cartService.deleteItem(indexItem);
  }


  decreaseQuantity(indexItem: number) {

    if (this.cartItems[indexItem].quantity > 0){
      this.cartService.decreaseQuantity(indexItem);
      this.totalPrice -= this.cartItems[indexItem].price;
    }

  }

  increaseQuantity(indexItem: number) {
    this.cartService.increaseQuantity(indexItem);
    this.totalPrice += this.cartItems[indexItem].price;

  }
}


