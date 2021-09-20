import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {TokenCookieService} from '../../services/auth/token-cookie.service';
import {UserLog} from '../../models/user-log';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  User: any = {};
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private UserService: UserService, private tokenService: TokenCookieService) { }

  ngOnInit(): void {
    this.checkLogin();
    this.getUser();
  }
  checkLogin(): void{
    if (this.tokenService.getUsername()){
      this.isLogin = true;
    }
  }
  getUser(): void{
    if (this.isLogin === true){
      this.UserService.getUser(this.tokenService.getUsername()).subscribe(
        res => {
          this.User = res.body;
          console.log(this.User);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
