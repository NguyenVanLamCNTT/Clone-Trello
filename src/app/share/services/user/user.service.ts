import { Injectable } from '@angular/core';
import {ApiCoreService} from '../core/api-core.service';
import {TokenCookieService} from '../auth/token-cookie.service';
import {Observable} from 'rxjs';
import {UserResponse} from '../../models/response/user-response';
import {environment} from '../../../../environments/environment';

const apiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiCoreService,
              private tokenCookie: TokenCookieService) { }
  getUser(username: string): Observable<UserResponse>{
    const path = `${apiUrl}/api/users/${username}`;
    return this.apiService.get(path);
  }
}
