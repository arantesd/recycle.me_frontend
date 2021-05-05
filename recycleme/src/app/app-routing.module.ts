import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { DicasComponent } from './dicas/dicas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'sobre', component: SobreNosComponent},
  {path: 'cadastrarProduto', component: CadastrarProdutoComponent},
  {path: 'detalhe', component: ProdutoDetalheComponent},
  {path: 'dicas', component: DicasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
