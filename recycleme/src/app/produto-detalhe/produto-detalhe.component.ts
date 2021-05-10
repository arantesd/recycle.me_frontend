import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Avaliacao } from '../model/Avaliacao';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { ProdutoService } from '../service/produto.service';
import { UsuarioAvaliacaoService } from '../service/usuario-avaliacao.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  avaliacao: Avaliacao= new Avaliacao();
  listaAvaliacao: Avaliacao[];
  produto: Produto= new Produto;
  usuario: Usuario = new Usuario();
  userLogin: UsuarioLogin = new UsuarioLogin();
  idUser = environment.id
  IdAvaliacao : number;


  constructor(
    private avaliacaoService: UsuarioAvaliacaoService,
    private produtoService: ProdutoService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  cadastrar() {
    this.avaliacao.id = this.IdAvaliacao
    this.usuario.id = this.idUser
    this.avaliacao.usuario = this.usuario
    this.avaliacaoService
      .postAvaliacao(this.avaliacao)
      .subscribe((resp: Avaliacao) => {
        this.avaliacao = resp;
        alert('Avaliação postada com sucesso!');
        console.log(this.avaliacao.usuario)
      });
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produto = resp
    })
    
  }

  findAllAvalicao(){
    this.avaliacaoService.getAllAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }

  findAvaliacaoMaior(){
    this.avaliacaoService.getAvaliacaoMaior().subscribe((resp: Avaliacao[]) => {
      this.listaAvaliacao = resp
    })
  }

  // Retorna uma lista baseado em um número de 0 a 5
  findAvaliacao(){
    this.avaliacaoService.getAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }
  

}
