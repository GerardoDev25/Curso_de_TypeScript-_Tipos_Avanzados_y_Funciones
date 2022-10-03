import { Product } from './product.model';
export let products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const updateProduct = (id: string, change: Product): Product | undefined => {
  const index = products.find((prod, index) => prod.id === id && index);
  if (typeof index == 'number') {
    products[index] = change;
    return products[index];
  }
  return undefined;
};

export const getProduct = (id: string): Product | undefined => {
  return products.find((prod) => prod.id === id);
};

export const deleteProduct = (id: string): Product | undefined => {
  const productfined = products.find((prod) => prod.id === id);
  products = products.filter((product) => product.id !== id);

  return productfined;
};
