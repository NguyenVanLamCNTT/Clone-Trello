import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
@Injectable({
  providedIn: 'root'
})
export class TokenCookieService {
  constructor(private cookieService: CookieService) { }
  public saveToken(token: string): void {
    this.cookieService.delete(TOKEN_KEY);
    this.cookieService.set(TOKEN_KEY, token);
  }
  public getToken(): any{
    return this.cookieService.get(TOKEN_KEY);
  }
  public logout(): void{
    this.cookieService.deleteAll();
  }
  public saveUsername(username: string): void{
    this.cookieService.delete(USERNAME_KEY);
    this.cookieService.set(USERNAME_KEY, username);
  }
  public getUsername(): any{
    return this.cookieService.get(USERNAME_KEY);
  }
}
