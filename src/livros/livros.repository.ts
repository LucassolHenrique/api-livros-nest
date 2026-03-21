import { Injectable } from "@nestjs/common";
import { Livro } from "./entities/livro.entity";

@Injectable()
export class LivrosRepository {
    listaLivros: Livro[] = [];
    autoIncrementoId: number = 1;

  create(livro: Omit<Livro, "id">): Livro {
    let livroInserido = new Livro()
    livroInserido.id = this.autoIncrementoId++;
    livroInserido = {...livroInserido, ...livro}
    this.listaLivros.push(livroInserido);
    return livroInserido;
  }

  findAll() {
    return this.listaLivros;
  }

  findOne(id: number) {
    return this.listaLivros.find(livro => livro.id === id);
  }

  /*update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }*/
}