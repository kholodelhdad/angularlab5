import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../interfaces/product";
import {Item} from "../interfaces/item";

@Injectable({
  providedIn: 'root'
})
export class ProductcardService {
  private cartItems:Item[];
  private cartItemsCount:BehaviorSubject<number>;
  constructor() {
    this.cartItems = [];
    this.cartItemsCount = new BehaviorSubject<number>(0);
   }
   addItem(product:Product){
    this.cartItems.push({image: product.image, name: product.title, price: product.price, quantity: 0 } as Item);
    this.cartItemsCount.next(this.cartItems.length);
  }

  getCartItemsCountStatus(){
    return this.cartItemsCount.asObservable();
  }

  getAllItems(){
    return this.cartItems;
  }

  deleteItem(indexItem: number) {
    if (indexItem > -1){
      this.cartItems.splice(indexItem, 1);
      this.cartItemsCount.next(this.cartItems.length);
    }

  }

  decreaseQuantity(indexItem: number) {
    if (indexItem > -1 && this.cartItems[indexItem].quantity > 0)
      this.cartItems[indexItem].quantity--;
  }

  increaseQuantity(indexItem: number) {
    if (indexItem > -1)
      this.cartItems[indexItem].quantity++;
  }
}
