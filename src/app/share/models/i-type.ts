import {EType} from './e-type';

export interface IType{
  type: EType;
  createAt?: Date;
  host: string;
  entity: string;
  content: any;
}
