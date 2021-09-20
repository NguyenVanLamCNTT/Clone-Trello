import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../share/services/auth/auth.service';
import {TokenCookieService} from '../../../share/services/auth/token-cookie.service';
import {Router} from '@angular/router';

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
  // tslint:disable-next-line:variable-name
  err_password = '';
  err = false;
  notify = '';
  constructor(private authService: AuthService, private tokenCookie: TokenCookieService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(a: boolean): void{
    if (a === true){
      this.authService.login(this.restForm.value).subscribe(
        res => {
          this.tokenCookie.saveToken(res.body.token);
          this.tokenCookie.saveUsername(this.restForm.value.username);
          this.router.navigate(['/display']);
        }, error => {
          this.notify = error.error.message;
        }
      );
    }
  }
  checkError(): void{
    if (this.err_password === this.err_username){
      this.err = true;
    }
  }
  regex(): void{
    // tslint:disable-next-line:variable-name
    const reg_username = /^[a-z0-9]{0,30}$/;
    if (this.restForm.value.username){
      if (reg_username.test(this.restForm.value.username) === false){
        this.err_username = 'username không hợp lệ';
      }else {
        this.err_username = '';
      }
    }
    if (this.restForm.value.password){
      if (this.restForm.value.password.length < 8){
        this.err_password = 'password không hợp lệ';
      }else {
        this.err_password = '';
      }
    }
  }
}
