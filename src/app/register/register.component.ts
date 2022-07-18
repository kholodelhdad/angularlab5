import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
//import { MustMatch } from "./confirm";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerform = new FormGroup({
        yourname: new FormControl('', Validators.required),
        email:new FormControl('',[
           Validators.required,
           Validators.email,
        ]),
        name: new FormControl('', [
          Validators.required,
          // Validators.minLength(10),
          // Validators.maxLength(200),
          Validators.pattern(".*\\S.*[a-zA-z0-9_-]"),
        ]),
        pass:new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$"),
        ]),
        confirmpass: new FormControl('', Validators.required),
      });
  }
   

  ngOnInit(): void {
    //validator: MustMatch('pass', 'confirmpass')
  }
  handleFormSubmit() {
    console.log(this.registerform);
  }
}
