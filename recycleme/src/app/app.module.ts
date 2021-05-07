import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import{HashLocationStrategy,LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { ProdutoAvaliacaoComponent } from './produto-avaliacao/produto-avaliacao.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DicasComponent } from './dicas/dicas.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    CadastrarComponent,
    FooterComponent,
    HomeComponent,
    CategoriaComponent,
    CadastrarProdutoComponent,
    HomeLoginComponent,
    ProdutoDetalheComponent,
    EditarPerfilComponent,
    ProdutoAvaliacaoComponent,
    SobreNosComponent,
    DicasComponent,
    MenuLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
