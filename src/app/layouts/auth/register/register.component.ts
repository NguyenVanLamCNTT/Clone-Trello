import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../share/services/auth/auth.service';

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
  err = false;
  notify = '';
  success = '';
  classTitle = '';
  btnYes = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submitRegister(err: boolean): void {
    if (err === true){
      const data = {
        username: this.restForm.value.username,
        password: this.restForm.value.password,
        firstname: this.restForm.value.firstname,
        lastname: this.restForm.value.lastname,
        phone: this.restForm.value.phone,
        email: this.restForm.value.email
      };
      this.authService.register(data).subscribe(
        res => {
          this.notify = 'Bạn có muốn đi đến trang đăng nhập?';
          this.success = 'Bạn đã đăng ký thành công!';
          this.classTitle = 'true';
          this.btnYes = true;
        }, error => {
          console.log(error);
          this.classTitle = 'false';
          this.success = 'Đăng ký thất bại!';
          this.notify = error.error.message;
        }
      );
    }else {
      console.log('err!');
    }
  }
  checkError(): void{
    // tslint:disable-next-line:max-line-length
    if (this.errUsername === '' && this.errPassword === '' && this.errLastname === '' && this.errFirstname === '' && this.errEmail === '' && this.errPhone === '' && this.errEnterPassword === ''){
      this.err = true;
    }
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
