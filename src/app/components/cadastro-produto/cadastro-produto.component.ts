import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/produto-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
	selector: 'app-cadastro-produto',
	templateUrl: './cadastro-produto.component.html',
	styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
	produtos: Produto[] = [];
	novoProduto: Produto = new Produto('', 0, '', 0, '', '', false);
	constructor(private produtoService: ProdutoService) {}
	cadastrarProduto() {
		// console.log(this.produtos);
		this.produtoService.adicionarProduto(this.novoProduto);
		this.produtos.push(this.novoProduto);
		this.novoProduto = new Produto('', 0, '', 0, '', '', false);
	}
}
