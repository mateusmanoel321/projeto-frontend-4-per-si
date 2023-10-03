import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './components/listagem-produto/listagem-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    ListagemProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
