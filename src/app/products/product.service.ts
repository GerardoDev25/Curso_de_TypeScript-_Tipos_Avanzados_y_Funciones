import { Product } from './product.model';
import { CreateProductDTO, UpdateProductDto, FindProductDto } from './product.dto';
import faker from '@faker-js/faker';

export let products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

// export const updateProduct = (id: string, change: Product): Product | undefined => {
//   const index = products.find((prod, index) => prod.id === id && index);
//   if (typeof index == 'number') {
//     products[index] = change;
//     return products[index];
//   }
//   return undefined;
// };

export const updateProduct = (id: Product['id'], change: UpdateProductDto): Product => {
  const index = products.findIndex((product) => product.id === id);

  products[index] = {
    ...products[index],
    ...change,
  };

  return products[index];
};

// export const getProduct = (id: string): Product | undefined => {
//   return products.find((prod) => prod.id === id);
// };

export const findProducts = (dto: FindProductDto): Product[] => {
  return products;
};

export const deleteProduct = (id: string): Product | undefined => {
  const productfined = products.find((prod) => prod.id === id);
  products = products.filter((product) => product.id !== id);

  return productfined;
};
