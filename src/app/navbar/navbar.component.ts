import { Component, OnInit } from '@angular/core';
import { ProductcardService } from '../services/productcard.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:number = 0
  constructor(private cartserv:ProductcardService) { }

  ngOnInit(): void {
    this.cartserv.getCartItemsCountStatus().subscribe(count => {
      this.cartCount = count;
  })

}
}
