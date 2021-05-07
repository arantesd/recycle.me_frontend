import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../model/Avaliacao';
import { ProdutoAvaliacaoService } from '../service/produto-avaliacao.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[];

  constructor(
     private avaliacaoService: ProdutoAvaliacaoService
  ) { }

  ngOnInit(): void {
  }

  
}
