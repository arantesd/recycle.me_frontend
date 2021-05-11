import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  idUser = environment.id
  usuario: Usuario = new Usuario()
  listaUsuario: Usuario[]
  produto: Produto= new Produto()
  listaProduto: Produto[];

  constructor(
    private authService: AuthService,
    private router: Router,

  ) {}

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findByIdUser()
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario= resp
    })
  }
}
