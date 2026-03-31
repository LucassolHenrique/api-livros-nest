import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private nextId = 1;

  create(nome: string, preco: number): Product {
    const product = new Product(this.nextId++, nome, preco);
    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | null {
    return this.products.find(p => p.id === id) || null;
  }

  update(id: number, nome: string, preco: number): Product | null {
    const product = this.products.find(p => p.id === id);
    if (!product) return null;
    product.nome = nome;
    product.preco = preco;
    return product;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
