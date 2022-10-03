import faker from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: Number.parseInt(faker.commerce.price()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    },
  });
}

console.log(products);
