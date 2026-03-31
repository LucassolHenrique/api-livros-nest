import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() body: { nome: string; preco: number }) {
    return this.productsService.create(body.nome, body.preco);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nome: string; preco: number }) {
    return this.productsService.update(+id, body.nome, body.preco);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const deleted = this.productsService.delete(+id);
    return { deleted };
  }
}
