const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 7];
prices.push('asas');

let user: [string, number, boolean?];
user = ['nicobytes', 15, true];
// user = ['12', 15];

const [username, age] = user;

console.log({ username, age });
