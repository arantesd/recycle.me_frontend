import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Avaliacao } from '../model/Avaliacao';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { ProdutoService } from '../service/produto.service';
import { UsuarioAvaliacaoService } from '../service/usuario-avaliacao.service';
import { UsuarioService } from '../service/usuario.service';

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
  listaUsuario: Usuario[]
  userLogin: UsuarioLogin = new UsuarioLogin();
  idUser = environment.id
  IdAvaliacao : number;
 
  changeText: boolean

  constructor(
    private avaliacaoService: UsuarioAvaliacaoService,
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService,
    private route : ActivatedRoute,
  ) { 
    this.changeText = false
  }

  ngOnInit(){
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllAvalicao()
  }

  cadastrar() {
    this.avaliacao.id = this.IdAvaliacao
    this.usuario.id = this.idUser
    this.avaliacao.usuario = this.usuario
    this.avaliacaoService.postAvaliacao(this.avaliacao).subscribe((resp: Avaliacao) => {
        this.avaliacao = resp;
        alert('Avaliação postada com sucesso!');
      },erro=> {
        if(erro.status == 500){
          if(this.usuario.id == 0){
            alert('Erro no Cadastro! Você precisa estar cadastrado para efetuar uma avaliação')
          }else{
            alert('Você esqueceu de dar a nota da avaliação')
          }
        }
      });
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produto = resp
    })
    
  }
  findAllUsuario(){
    this.usuarioService.getAllUsuario().subscribe((resp: Usuario[])=>{
      this.listaUsuario = resp
    })
  }
  findAllAvalicao(){
    this.avaliacaoService.getAllAvaliacao().subscribe((resp: Avaliacao[]) =>{
      this.listaAvaliacao = resp
    })
  }
/*
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
*/
}
