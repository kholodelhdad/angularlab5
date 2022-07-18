import { ProductcardService } from './../services/productcard.service';
import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  counter=10;
  @Input() product!: Product ;
  constructor(private router:Router,private cartser:ProductcardService) { }

  ngOnInit(): void {
  }
  goToDetails(id : number) {
    this.router.navigate(['/product-details' , id]);
  }
  addItemToCart() {
    this.cartser.addItem(this.product);
  }
}
