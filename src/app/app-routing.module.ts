import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutoComponent } from './components/listagem-produto/listagem-produto.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
	{ path: '', component: CadastroProdutoComponent},
	{ path: 'cadastro-produto', component: CadastroProdutoComponent},
	{ path: 'listagem-produto', component: ListagemProdutoComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
