import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  categoria: string

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
    this.authService.registrar(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/detalhe'])
      alert('Produto registrado com sucesso!')
    })

    console.log(this.registrar)
  }
  
}
