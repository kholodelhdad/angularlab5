import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  pass: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmitForm(productform : any){
    console.log(productform);
  }

}
