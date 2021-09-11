import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  restForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  // tslint:disable-next-line:variable-name
  err_username = '';
  constructor() { }

  ngOnInit(): void {
  }
  regexUsername(): void{
    // tslint:disable-next-line:variable-name
    const reg_username = /^[A-z0-9]{0,30}$/;
    if (this.restForm.value.username){
      if (reg_username.test(this.restForm.value.username) === false){
        this.err_username = 'username không hợp lệ';
      }else {
        this.err_username = '';
      }
    }
  }
}
