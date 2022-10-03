import { Product } from './product.model';

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

type ExamplePick = Pick<Product, 'category' | 'price'>;
