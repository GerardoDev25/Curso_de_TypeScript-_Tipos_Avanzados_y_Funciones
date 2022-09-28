let unknowVar: unknown;
unknowVar = '1';

// unknowVar.toLocaleLowerCase();
if (typeof unknowVar == 'string') {
  unknowVar.toLocaleLowerCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

let isNew: boolean;
if (typeof unknowVar == 'boolean') {
  isNew = unknowVar;
}
