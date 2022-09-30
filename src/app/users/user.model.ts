import { BaseModel } from '../base.model';
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'saller',
  COSTUMER = 'custumer',
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
