export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'saller',
  COSTUMER = 'custumer',
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
