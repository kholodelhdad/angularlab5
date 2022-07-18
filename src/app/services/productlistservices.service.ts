import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductlistservicesService {

  constructor(private http:HttpClient) { }
  getProductsList() {
    return this.http.get('https://fakestoreapi.com/products', {
      
    });
  }
  getProductById(id: number){
    return this.http.get(`https://fakestoreapi.com/products/` + id);
  }
}
