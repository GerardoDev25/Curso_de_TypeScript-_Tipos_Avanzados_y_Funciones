export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'saller',
  COSTUMER = 'custumer',
}

export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'username',
  role: ROLES.ADMIN,
};


console.log(nicoUser);