import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  
  constructor(
    private produtoService: ProdutoService,
  ) { }

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
