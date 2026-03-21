import { Inject, Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { LivrosRepository } from './livros.repository';

@Injectable()
export class LivrosService {
  @Inject(LivrosRepository)
  repository: LivrosRepository;

  create(createLivroDto: CreateLivroDto) {
    return this.repository.create({ ...createLivroDto });
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  /*update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }*/
}
