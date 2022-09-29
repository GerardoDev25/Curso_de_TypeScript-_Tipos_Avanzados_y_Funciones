export const createProduct = (id: string | number, stok?: number, isNew?: boolean) => {
  return { id, stok: stok ?? 12, isNew: isNew ?? false};
};

const p1 = createProduct(1, 1223, true);
const p2 = createProduct(1, 0);
const p3 = createProduct(34);

console.log(p1);
console.log(p2);
console.log(p3);
