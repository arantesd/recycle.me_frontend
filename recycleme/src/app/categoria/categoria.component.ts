import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Avaliacao } from '../model/Avaliacao';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  produto: Produto = new Produto();
  listaProduto: Produto[];

  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[];

  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService
  ) {}
  ngOnInit() {
    this.findAllProduto();
  }
  findAllProduto() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }
  findProdutoByCategoria(categoria: string) {
    this.produtoService
      .getByCategoria(categoria)
      .subscribe((resp: Produto[]) => {
        this.listaProduto = resp;
      });
  }
}
