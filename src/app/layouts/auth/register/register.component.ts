import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  restForm = new FormGroup({
    username: new  FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    enterPassword: new FormControl('')
  });
  errUsername = '';
  errPassword = '';
  errFirstname = '';
  errLastname = '';
  errPhone = '';
  errEmail = '';
  errEnterPassword = '';
  constructor() { }

  ngOnInit(): void {
  }
  Regex(): void {
    const regUsername = /^[a-z0-9]{0,30}$/;
    const regPhone = /^0[389][0-9]{8}$/;
    const regFirstname = /^([A-Z][a-z]{0,20} ){0,6}([A-Z][a-z]{0,20} {0,2})$/;
    const regLastname = /^([A-Z][a-z]{0,20} ){0,6}([A-Z][a-z]{0,20} {0,2})$/;
    const regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (this.restForm.value.enterPassword){
      if (this.restForm.value.enterPassword !== this.restForm.value.password){
        this.errEnterPassword = 'password không chính xác';
      }else {
        this.errEnterPassword = '';
      }
    }
    if (this.restForm.value.username){
      if (regUsername.test(this.restForm.value.username) === false){
        this.errUsername = 'username không hợp lệ';
      }else {
        this.errUsername = '';
      }
    }
    if (this.restForm.value.password){
      if (this.restForm.value.password.length < 8){
        this.errPassword = 'password không hợp lệ';
      }else {
        this.errPassword = '';
      }
    }
    if (this.restForm.value.phone){
      if (regPhone.test(this.restForm.value.phone) === false){
        this.errPhone = 'phone không hợp lệ';
      }else {
        this.errPhone = '';
      }
    }
    if (this.restForm.value.firstname){
      if (regFirstname.test(this.restForm.value.firstname) === false){
        this.errFirstname = 'firstname không hợp lệ';
      }else {
        this.errFirstname = '';
      }
    }
    if (this.restForm.value.lastname){
      if (regLastname.test(this.restForm.value.lastname) === false){
        this.errLastname = 'lastname không hợp lệ';
      }else {
        this.errLastname = '';
      }
    }
    if (this.restForm.value.email){
      if (regEmail.test(this.restForm.value.email) === false){
        this.errEmail = 'email không hợp lệ';
      }else {
        this.errEmail = '';
      }
    }
  }

}
