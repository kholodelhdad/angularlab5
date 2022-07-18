import { ProductlistservicesService } from './../services/productlistservices.service';
import { Component, OnInit } from '@angular/core';
//import products from '../../assets/product.json';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productDetails: Product | any;

  constructor(private activatedRoute:ActivatedRoute,private products:ProductlistservicesService){}

  ngOnInit(): void {
    this.products.getProductById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(product => {
      this.productDetails= product;
  });
  }
}
