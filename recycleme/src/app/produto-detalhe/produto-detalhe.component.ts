import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Avaliacao } from '../model/Avaliacao';
import { Usuario } from '../model/Usuario';
import { UsuarioAvaliacaoService } from '../service/usuario-avaliacao.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  usuario: Usuario = new Usuario()
  avaliacoes: Avaliacao = new Avaliacao()
  id = environment.id
  idUser: any

  constructor(
    private router: Router,
    private avaliacaoService: UsuarioAvaliacaoService 
  ) { }

  ngOnInit(): void{
  }

  postarAvaliacao(){
    this.avaliacaoService.postAvaliacao(this.avaliacoes).subscribe((resp: Avaliacao)=>{
      this.idUser = this.id
      console.log(this.idUser)
      this.avaliacoes.usuario = this.idUser
      this.avaliacoes = resp
      console.log(this.avaliacoes)
    })
  }
}
