import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

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
  categorias: string[] = ['METAL','PAPEL','PLASTICO','VIDRO','MADEIRA']

  constructor(
    private produtoService: ProdutoService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  tipoCategoria(event: any){
    this.categoria = event.target.value 
    console.log(this.categoria)
  }


  registrar(){

    this.produto.categoria = this.categoria
    console.log(this.idUser)
    console.log(this.produto)
    this.produtoService.registrar(this.produto, this.idUser).subscribe((resp: Produto) =>{
      this.produto = resp
      this.router.navigate(['/detalhe'])
      alert('Produto registrado com sucesso!')
    })

    console.log(this.registrar)
  }
  
}
