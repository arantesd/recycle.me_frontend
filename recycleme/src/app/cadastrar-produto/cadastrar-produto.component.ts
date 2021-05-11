import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
=======
>>>>>>> 134f2ba4d9fd20e7ca6db8555374a031ad090d13
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

<<<<<<< HEAD
  produto: Produto = new Produto
  categoria: string
=======
  constructor(
    public auth: AuthService
  ) { }
>>>>>>> 134f2ba4d9fd20e7ca6db8555374a031ad090d13

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
