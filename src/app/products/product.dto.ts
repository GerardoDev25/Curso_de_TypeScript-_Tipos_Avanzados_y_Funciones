import { Product } from './product.model';

// get only the fiels that need of an interface
export type ExamplePick = Pick<Product, 'category' | 'price'>;

// make all fiels reuerid
export type ExampleRequired = Required<Product>;

// omote los campos que le pasamos
export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

// make all files like optionals
export interface UpdateProductDto extends Partial<CreateProductDTO> {}

// make read only to interface
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
