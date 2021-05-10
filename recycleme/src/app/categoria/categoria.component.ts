import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Avaliacao } from '../model/Avaliacao';
<<<<<<< HEAD
import { Usuario } from '../model/Usuario';
=======
import { AuthService } from '../service/auth.service';
>>>>>>> 91eb88327ea1717247a832a4c8d60765c1951813

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[]
  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService
  ){ }


  ngOnInit() {
    this.findAllProduto()
  }


  findAllProduto(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
      console.log(this.listaProduto)
    })
  } 
}
