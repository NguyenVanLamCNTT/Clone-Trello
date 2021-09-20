import {IResponse} from './i-response';
import {UserLog} from '../user-log';

export interface UserResponse extends IResponse<UserLog>{
  body: UserLog;
}
export interface UsersResponse extends IResponse<Array<UserLog>>{
  body: Array<UserLog>;
}
