import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  usuario: Usuario = new Usuario() 
  categoria: string
  idUser = environment.id
  idProduto: number

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  tipoCategoria(event: any){
    this.categoria = event.target.value 
  }


  registrar(){
    this.produto.id = this.idProduto
    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario
    this.authService.registrar(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/detalhe'])
      alert('Produto registrado com sucesso!')
    })

    console.log(this.registrar)
  }
  
}
