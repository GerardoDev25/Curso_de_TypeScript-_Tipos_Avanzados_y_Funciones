const withOutEnd = () => {
  while (true) {
    console.log('never stop learning');
  }
};

const fail = (msg: string) => {
  throw new Error(msg);
};

const example = (input: unknown) => {
  if (typeof input == 'string') {
    return 'is a string';
  } else if (Array.isArray(input)) {
    return 'is an array';
  }
  return fail('not match');
};

console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(example([123]));
console.log(example('hola despues de fail'));
