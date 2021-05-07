import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avaliacao } from '../model/Avaliacao';
import { ProdutoAvaliacaoService } from '../service/produto-avaliacao.service';

@Component({
  selector: 'app-produto-avaliacao',
  templateUrl: './produto-avaliacao.component.html',
  styleUrls: ['./produto-avaliacao.component.css'],
})
export class ProdutoAvaliacaoComponent implements OnInit {
  avaliacao: Avaliacao = new Avaliacao();
  listaAvaliacao: Avaliacao[];

  constructor(
    private router: Router,
    private avaliacaoService: ProdutoAvaliacaoService
  ) {}

  ngOnInit(): void {}

  findAllAvalicao(){
    this.avaliacaoService.getAllAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }

  findAvaliacaoId(){
    this.avaliacaoService.getAvaliacaoId().subscribe((resp: Avaliacao) =>{
      this.avaliacao = resp
    })
  }

// Retorna uma lista baseado em um número de 0 a 5
  findAvaliacao(){
    this.avaliacaoService.getAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }

  findAvaliacaoMaior(){
    this.avaliacaoService.getAvaliacaoMaior().subscribe((resp: Avaliacao[]) => {
      this.listaAvaliacao = resp
    })
  }

  cadastrar() {
    this.avaliacaoService
      .postAvaliacao(this.avaliacao)
      .subscribe((resp: Avaliacao) => {
        this.avaliacao = resp;
        alert('Avaliação postada com sucesso!');
        this.avaliacao = new Avaliacao();
      });
  }
}
