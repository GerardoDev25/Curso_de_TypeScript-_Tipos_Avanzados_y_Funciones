import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updateAt: new Date(),
  stock: 90,
  size: 'S',
  category: {
    id: '1',
    name: 'c1',
    createdAt: new Date(),
    updateAt: new Date(),
  },
});
