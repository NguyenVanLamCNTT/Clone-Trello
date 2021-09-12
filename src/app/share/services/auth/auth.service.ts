import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiCoreService} from '../core/api-core.service';
import {TokenCookieService} from './token-cookie.service';
import {Observable} from 'rxjs';

const apiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiCoreService,
              private tokenCookie: TokenCookieService) {
  }
  login(data: any): Observable<any>{
    const path = `${apiUrl}/api/auth/login`;
    return this.apiService.post(path, data);
  }
  register(data: any): Observable<any>{
    const path = `${apiUrl}/api/auth/register`;
    return this.apiService.post(path, data);
  }
  logout(): Observable<any>{
    const path = `${apiUrl}/api/auth/logout`;
    return this.apiService.get(path);
  }
  isLoggedIn(): void{
    return this.tokenCookie.getToken();
  }
}
