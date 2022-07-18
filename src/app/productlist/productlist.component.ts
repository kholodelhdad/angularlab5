import { Component, OnInit } from '@angular/core';
import products from '../../assets/product.json';
import { Product } from'../interfaces/product';
import { ProductlistservicesService } from '../services/productlistservices.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productsList : Array<Product> = [];
  constructor(private  productsService :ProductlistservicesService) { }

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe((data : any) => {
      this.productsList=data
      
   });
  }

}
