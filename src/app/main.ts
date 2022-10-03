import faker from '@faker-js/faker';
import { addProduct, products, updateProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: Number.parseInt(faker.commerce.price()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];

updateProduct(product.id, { title: 'new Title', stock: 80, color: '' });
