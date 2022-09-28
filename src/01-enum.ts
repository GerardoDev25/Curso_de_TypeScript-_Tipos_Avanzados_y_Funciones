enum ROLES {
  ADMIN = 'admin',
  SALLER = 'saller',
  CUSTUMER = 'custumer',
}

type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'username',
  role: ROLES.ADMIN,
};


console.log(nicoUser);